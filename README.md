# 🗂️ Digital Asset Management System (DAM) with AI Assistant (Cursor)

A modern Digital Asset Management (DAM) system built using **Node.js**, **React (Vite)**, and **MongoDB**, designed to store, organize, and retrieve assets like images, PDFs, and videos. This project also demonstrates effective use of **AI tools (Cursor)** during development.

---

## 📦 Features

### ✅ Frontend (React + Vite)
- Upload assets (images, PDFs, videos)
- Real-time upload progress
- Asset gallery/list view with preview & download
- Filter/search by file type, tags, and upload date
- Responsive design with error handling

### ✅ Backend (Node.js + Express + MongoDB)
- RESTful API for uploading & retrieving assets
- File validation and error handling
- Stores metadata: filename, size, type, tags, upload date
- Supports local file storage (can be extended to cloud)

### 🧠 AI (Cursor) Integration
- Used Cursor AI coding assistant for:
  - File upload handling
  - React component generation
  - API and architecture design
- Prompts & reflections documented in `/docs`

---

## 🧱 Folder Structure

├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── config/
│ ├── .env
│ ├── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── .env
│ ├── vite.config.js
├── docs/
│ ├── prompts.md
│ ├── evaluation.md
│ ├── architecture.md
├── README.md


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- MongoDB installed or cloud URI (e.g., MongoDB Atlas)
- Git

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Hitesh-Bangar/CursorAI_Eccenrtic_task.git
cd CursorAI_Eccenrtic_task

cd backend
npm install

