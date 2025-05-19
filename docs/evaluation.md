# AI Usage Evaluation and Project Reflections

This document captures decisions made during the project, challenges encountered, and how AI tools (Cursor, ChatGPT) supported development.

---

## ⚙️ Architecture Decisions

| Area              | Decision                             | Rationale                              |
|-------------------|--------------------------------------|----------------------------------------|
| Backend Framework | Node.js with Express                 | Familiar, fast to prototype             |
| Storage           | Local filesystem (`/uploads`)        | Simplicity over S3/GCP for MVP         |
| DB                | MongoDB + Mongoose                   | Easy to store flexible asset metadata  |
| Frontend          | React with Vite                      | Fast dev server, cleaner build process |
| Styling           | Tailwind CSS                         | Rapid prototyping, utility-first       |

---

## 🤖 AI vs Human Contribution

| Task                     | AI Assisted | Manual Tuning |
|--------------------------|-------------|----------------|
| Folder structure         | ✅           | ❌              |
| Backend file upload API  | ✅           | ✅ (error fixes)|
| MongoDB schema setup     | ✅           | ✅ (tags, size) |
| React UploadForm         | ✅           | ✅ (UX tweaks)  |
| Axios integration        | ✅           | ✅              |
| Search/filter feature    | ❌           | ✅ (custom logic)|
| Error boundaries         | ❌           | ✅              |
| Project documentation    | ✅ (initial) | ✅ (expanded)   |

---

## 🔍 Challenges & Resolutions

### 1. Environment Variables (Vite)
- Issue: `VITE_API_URL` was undefined
- Fix: Defined in `.env`, used `import.meta.env.VITE_API_URL`

### 2. CORS Errors
- Issue: Upload requests blocked
- Fix: Enabled CORS in Express with `origin: http://localhost:5173`

### 3. File Validation & Limits
- Issue: Large file uploads silently failed
- Fix: Set Multer size limits, added frontend feedback

### 4. Gallery View UX
- Issue: Videos and PDFs not displaying properly
- Fix: Custom component rendering by MIME type

---

## 📌 Lessons Learned

- **AI accelerates boilerplate**, but logic-layer thinking is still essential.
- File validation, MIME detection, and error boundaries need **manual design**.
- Vite is modern, but requires deeper knowledge of environment variable and build behavior.

Cursor provided useful scaffolding, but the **developer’s judgment was essential** for UX, architecture, and debugging.
