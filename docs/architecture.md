# System Architecture

This document explains the overall structure, data flow, and API design of the Digital Asset Management (DAM) system.

---

## 🔧 Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Frontend  | React (Vite), Tailwind CSS |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB (via Mongoose)   |
| Storage   | Local filesystem (`uploads/`) |
| AI Tools  | Cursor (AI Assistant), ChatGPT |

---

## 📁 Folder Layout

### Backend
backend/
├── controllers/ # Business logic (upload, fetch, filter)
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── uploads/ # Uploaded assets
├── app.js # Express app
├── server.js # MongoDB connect & listener


### Frontend
frontend/
├── src/
│ ├── components/ # UploadForm, AssetCard
│ ├── pages/ # Dashboard
│ ├── services/ # Axios API integration
│ ├── App.jsx # Root app
│ ├── main.jsx # Vite entry point
│ └── index.css # Tailwind CSS import


---

## 🔁 Data Flow

```mermaid
graph TD
A[User uploads file] --> B[React UploadForm]
B --> C[Axios POST /upload]
C --> D[Express /upload API]
D --> E[Multer stores file on disk]
D --> F[Mongoose saves metadata]
F --> G[MongoDB]
G --> H[Client fetches with GET /api/assets]
H --> I[Gallery renders]

📡 API Structure
POST /api/assets/upload
Handles file upload

Saves file on disk, metadata in DB

GET /api/assets
Returns list of all assets

Supports filtering by type, date, tag

GET /api/assets/:id
Download/view asset

