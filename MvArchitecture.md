# Medivoyage: AI-Driven Medical Tourism Architecture Session

**Project:** Medivoyage (Medical Tourism Facilitator)
**Date:** September 2025
**Topic:** System Architecture & AI Agent Orchestration

---

## User
I need to define the high-level architecture for Medivoyage. We are building a medical tourism platform that connects patients with international doctors. 

The system needs to handle:
1. **Secure Patient Data:** Storing medical records (HIPAA/GDPR compliance is critical).
2. **AI Triage Agent:** An agent that can ingest unstructured medical reports (PDFs, images) and suggest relevant specialists.
3. **Logistics & Booking:** Managing flights, accommodation, and appointment slots.

I want to use a microservices approach. Help me outline the core tech stack and the data flow for the AI Triage Agent.

---

## AI (Gemini)
Here is a proposed architecture focusing on security and scalability:

### Core Tech Stack
* **Frontend:** Next.js (React) for a performant, SEO-friendly patient portal.
* **Backend Gateway:** Node.js / Express (or .NET Core if strict enterprise typing is preferred).
* **AI Service:** Python (FastAPI) to host the agents and RAG pipeline.
* **Database:** PostgreSQL (for relational data) + pgvector (for vector embeddings of medical reports).
* **Storage:** AWS S3 (encrypted buckets) for raw medical files.

### AI Triage Agent Data Flow
1.  **Ingestion:** User uploads a medical report (PDF/Image).
2.  **OCR & Processing:** A Python service extracts text using OCR (e.g., Tesseract or Azure Document Intelligence).
3.  **Anonymization:** PII (Personally Identifiable Information) is redacted *before* passing to the LLM.
4.  **Embedding:** The sanitized text is embedded and stored in `pgvector`.
5.  **Matching:** The LLM (e.g., GPT-4 or a fine-tuned medical model) compares the patient's condition against the `Specialist` vector index to recommend doctors.

---

## User
That flow works, but I want to be more specific about the **AI Service**. 

Instead of a monolithic "AI Service," let's split it into two distinct agents to avoid hallucinations:
1.  **Diagnostic Agent:** Strictly extracts symptoms and diagnosis from the report. It should *not* make recommendations yet.
2.  **Matching Agent:** Takes the structured output from the Diagnostic Agent and queries our `Doctors` database based on expertise and availability.

Refine the architecture to reflect this split. Also, write the **PostgreSQL schema** for the `MedicalRequest` and `DoctorProfile` tables to support this matching.

---

## AI (Gemini)
Excellent point. Decoupling extraction from matching reduces risk and allows us to validate the data at the "Diagnostic" stage before it reaches the "Matching" stage.

### Revised Micro-Agent Architecture
1.  **Diagnostic Agent (Extractor):**
    * Input: Raw PDF/Image.
    * Action: OCR -> Entity Extraction (Symptoms, Diagnosis code, Urgency Level).
    * Output: JSON object (e.g., `{ "condition": "ACL Tear", "urgency": "High" }`).
2.  **Validation Layer:** A human admin or rule-based system verifies the JSON.
3.  **Matching Agent (Recommender):**
    * Input: Validated JSON.
    * Action: Vector search on `DoctorProfile` embeddings + SQL filter for `Availability`.
    * Output: Ranked list of doctors.

### Database Schema (PostgreSQL)

```sql
-- Enable vector extension for AI matching
CREATE EXTENSION IF NOT EXISTS vector;

-- Doctors: Stores profile and vector embeddings of their expertise
CREATE TABLE doctor_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    specialization TEXT NOT NULL,
    country TEXT NOT NULL,
    hospital_affiliation TEXT,
    expertise_embedding VECTOR(1536), -- For semantic search (e.g., "knee surgery expert")
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Medical Requests: The patient's journey entry
CREATE TABLE medical_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID REFERENCES auth.users(id),
    status VARCHAR(50) DEFAULT 'pending_triage', -- pending_triage, diagnosis_extracted, matched
    
    -- Encrypted links to raw files (S3)
    raw_report_url TEXT,
    
    -- Structured data extracted by Diagnostic Agent
    extracted_condition JSONB, -- { "diagnosis": "...", "confidence": 0.95 }
    triage_priority INTEGER CHECK (triage_priority BETWEEN 1 AND 5),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);