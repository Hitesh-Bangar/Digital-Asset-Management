import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/assets'
});

export const uploadFile = (formData, onUploadProgress) =>
  API.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress
  });

export const fetchAssets = (params) =>
  API.get('/', { params });

export const downloadAsset = async (id, originalName) => {
  const res = await API.get(`/${id}`, { responseType: 'blob' });
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', originalName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
