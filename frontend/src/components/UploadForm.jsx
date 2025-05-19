import { useState } from 'react';
import { uploadFile } from '../services/api';

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await uploadFile(formData, (event) => {
        setProgress(Math.round((event.loaded * 100) / event.total));
      });
      onUploadSuccess(res.data);
      setFile(null);
      setProgress(0);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded">
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        accept="image/*,application/pdf,video/mp4"
        className="block mb-2"
      />
      {progress > 0 && <progress value={progress} max="100" />}
      <button type="submit" className="btn">Upload</button>
    </form>
  );
}

export default UploadForm;
