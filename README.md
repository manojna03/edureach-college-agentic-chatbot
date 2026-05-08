# 🎓 EduReach — Agentic College Chatbot

EduReach is a full-stack AI-powered college assistant built using the MERN stack, LangChain.js, Google Gemini, and MongoDB Atlas Vector Search.

The platform helps students instantly get accurate information about:
- Courses
- Fees
- Placements
- Admissions
- Hostel facilities
- Campus details
- Faculty information

using an intelligent Retrieval-Augmented Generation (RAG) chatbot.

---

#  Features

## Authentication System
- JWT Authentication
- User Registration & Login
- Protected Routes
- Password Hashing using bcryptjs
- Auth-aware UI

##  AI Chat Agent (RAG)
- Agentic Retrieval-Augmented Generation
- Google Gemini integration
- Semantic similarity search
- MongoDB Atlas Vector Search
- Context-aware responses

##  Knowledge Base
- Custom EduReach knowledge dataset
- Vector embeddings using Gemini Embeddings
- Automatic text chunking and indexing

## AI Chat Interface
- Floating AI chat button
- Interactive chat drawer
- Quick question suggestions
- Real-time AI responses

## Frontend
- React + TypeScript + Vite
- Tailwind CSS v4
- Responsive UI
- Context API state management

---

#  Tech Stack

## Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

## Backend
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication

## AI / RAG Stack
- LangChain.js
- Google Gemini API
- MongoDB Atlas Vector Search
- Google Generative AI Embeddings

---

# RAG Architecture

## Step 1 — Indexing

LOAD → SPLIT → EMBED → STORE

- Load knowledge base documents
- Split into chunks
- Convert chunks into embeddings
- Store vectors in MongoDB Atlas

## Step 2 — Retrieval

User Question → Vector Search → Relevant Chunks Retrieved

## Step 3 — Generation

Gemini generates a response using:
- user query
- retrieved context

---

#  Project Structure

```bash
edureach/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── data/
│
├── server/
│   ├── knowledge-base/
│   │   └── edureach-knowledge.txt
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│
└── README.md