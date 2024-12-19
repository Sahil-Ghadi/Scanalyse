import React, { useState } from 'react';
import { AlertTriangle, Leaf } from 'lucide-react';
import type { Product } from '../types';
import ProductDetails from './ProductDetails';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const getRatingColor = (rating: number) => {
    if (rating <= 3) return 'bg-green-500';
    if (rating <= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute top-3 right-3 ${getRatingColor(product.rating)} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center`}>
            {product.rating}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">{product.category}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
          <div className="flex items-center gap-2">
            {product.rating <= 3 ? (
              <Leaf className="w-5 h-5 text-green-500" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-500" />
            )}
            <span className="text-sm text-gray-600">
              {product.rating <= 3 ? 'Clean & Safe' : 'Contains harmful ingredients'}
            </span>
          </div>
        </div>
      </div>

      {showDetails && (
        <ProductDetails 
          product={product} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </>
  );
}