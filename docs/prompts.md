# AI Prompts Log (Cursor / ChatGPT)

This document logs every prompt used to interact with the AI, the intent behind each prompt, the result, and whether the output was directly used or modified.

---

## 🔹 1. Prompt: "Give folder structure for a full-stack digital asset management system"
- ✅ Goal: Start the project with a clear folder layout.
- ✅ Result: Received backend/frontend separation with modular subfolders.
- 🧠 Used As-Is

---

## 🔹 2. Prompt: "Give backend code in Node.js with file upload, MongoDB, and API endpoints"
- ✅ Goal: Get Express app, file upload (Multer), and Mongoose schema.
- ✅ Result: Basic file upload route, MongoDB connection, metadata model.
- 🛠️ Slightly modified controller logic, added error handling

---

## 🔹 3. Prompt: "Generate React component to upload files with progress bar"
- ✅ Goal: Create UploadForm component.
- ✅ Result: Used `axios` with `onUploadProgress` for feedback.
- 🧠 Used Mostly As-Is with added state cleanup

---

## 🔹 4. Prompt: "Create a gallery view of uploaded assets"
- ✅ Goal: Build frontend AssetCard component to render metadata.
- ✅ Result: Tailwind-based card grid with view/download buttons.
- 🛠️ Extended to support PDFs and videos, not just images

---

## 🔹 5. Prompt: "How to fix 'import.meta.env.VITE_API_URL is undefined' error in Vite?"
- ✅ Goal: Resolve frontend crash on environment variable usage.
- ✅ Result: Explained difference from CRA, required `.env` fix.
- ✅ Used Directly

---

## 🔹 6. Prompt: "Reflect on AI vs developer role in project"
- ✅ Goal: Write AI usage reflection for docs.
- ✅ Result: Balanced analysis template generated.
- 🛠️ Rephrased and personalized in evaluation.md

---

Each prompt accelerated development and decision-making, especially in repetitive tasks or initial scaffolding.
