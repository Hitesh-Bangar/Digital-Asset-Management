import { downloadAsset } from '../services/api';

function AssetCard({ asset }) {
  return (
    <div className="border p-3 rounded shadow-sm">
      <p><strong>{asset.originalName}</strong></p>
      <p>Type: {asset.type}</p>
      <p>Size: {(asset.size / 1024).toFixed(2)} KB</p>
      <p>Uploaded: {new Date(asset.uploadDate).toLocaleDateString()}</p>
      <button onClick={() => downloadAsset(asset._id, asset.originalName)}>
        Download
      </button>
    </div>
  );
}

export default AssetCard;
