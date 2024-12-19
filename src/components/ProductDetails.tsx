import React from 'react';
import { AlertTriangle, Leaf,HelpCircle, X } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const getIngredientColor = (riskLevel: number) => {
    if (riskLevel <= 3) return 'bg-green-100 text-green-800';
    if (riskLevel <= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="relative inline-block w-full max-w-2xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-6">
            <div className="w-1/3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              
              <div className="flex items-center gap-2 mt-4">
                <div className={`${product.rating <= 3 ? 'bg-green-500' : product.rating <= 6 ? 'bg-yellow-500' : 'bg-red-500'} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center`}>
                  {product.rating}
                </div>
                <div className="flex items-center gap-2">
                  {product.rating <= 3 ? (
                    <Leaf className="w-5 h-5 text-green-500" />
                  ) : product.rating <= 6 ?(
                    <HelpCircle className="w-5 h-5 text-yellow-500"/>
                  ) :(
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-sm text-gray-600">
                    {product.rating <= 3 ? 'Clean & Safe' : product.rating <=6 ? 'Moderate Concerns':'Contains harmful ingredients'}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ingredients Analysis</h4>
                <div className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{ingredient.name}</span>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getIngredientColor(ingredient.riskLevel)}`}>
                        Risk Level: {ingredient.riskLevel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {product.ingredients.some(i => i.concerns.length > 0) && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Health Concerns</h4>
                  <div className="space-y-2">
                    {product.ingredients
                      .filter(i => i.concerns.length > 0)
                      .map((ingredient, index) => (
                        <div key={index} className="text-sm">
                          <span className="font-medium text-gray-700">{ingredient.name}:</span>
                          <span className="text-gray-600"> {ingredient.concerns.join(', ')}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}