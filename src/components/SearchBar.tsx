import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import Tesseract from 'tesseract.js';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [error, setError] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const handleInput = (event:
    React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
    onSearch(query);
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const imageData = reader.result as string;
        console.log('Uploaded Image Data:', imageData); // Log uploaded image data
        const { data: { text } } = await Tesseract.recognize(imageData, 'eng', {
          // logger: (m) => console.log(m), // Log progress
        });
        const finalText = text.trim().toLowerCase();
        setSearch(finalText)
        onSearch(finalText);
        console.log('OCR Extracted Text:', finalText); // Log extracted text
      } catch (err) {
        console.error('Error processing image with Tesseract:', err);
        setError('Error processing image. Please try again.');
        setSearch('')
        onSearch('');
      }
    };
    reader.onerror = () => {
      setError('Failed to read the uploaded file. Please try again.');
    };
    reader.readAsDataURL(file); // Convert file to Base64
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={search}
          placeholder="Search for a product or upload an image..."
          className="w-full px-4 py-3 pl-12 pr-16 text-gray-700 bg-white rounded-full border border-gray-200 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          onChange={handleInput}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <label
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-pink-500 hover:text-pink-600 cursor-pointer"
          htmlFor="file-upload"
        >
          <Upload className="w-5 h-5" />
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}