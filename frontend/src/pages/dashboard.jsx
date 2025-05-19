import { useEffect, useState } from 'react';
import { fetchAssets } from '../services/api';
import UploadForm from '../components/UploadForm';
import AssetCard from '../components/AssetCard';

function Dashboard() {
  const [assets, setAssets] = useState([]);

  const loadAssets = async () => {
    try {
      const res = await fetchAssets();
      setAssets(res.data);
    } catch (err) {
      console.error('Failed to load assets');
    }
  };

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Digital Asset Manager</h1>
      <UploadForm onUploadSuccess={loadAssets} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {assets.map(asset => (
          <AssetCard key={asset._id} asset={asset} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
