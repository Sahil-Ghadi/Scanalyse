import React, { useState } from 'react';
import { Search, Camera } from 'lucide-react';
import CameraModal from './CameraModal';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleCapture = async (imageData: string) => {
    // In a real application, you would:
    // 1. Send this image to your backend for processing
    // 2. Use computer vision to detect the product
    // 3. Look up the product in your database
    // For now, we'll just simulate a search
    onSearch('Captured Product');
  };

  return (
    <>
      <div className="relative w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a product or scan barcode..."
            className="w-full px-4 py-3 pl-12 pr-16 text-gray-700 bg-white rounded-full border border-gray-200 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <button
            onClick={() => setIsCameraOpen(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-pink-500 hover:text-pink-600"
            aria-label="Scan product"
          >
            <Camera className="w-5 h-5" />
          </button>
        </div>
      </div>

      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCapture}
      />
    </>
  );
}