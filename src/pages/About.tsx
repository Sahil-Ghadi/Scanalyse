import React from 'react';
import { Shield, Search, AlertTriangle, Leaf } from 'lucide-react';

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Scanalyse</h1>
        
        <p className="text-gray-600 mb-8">
          Scanalyse is your trusted companion in making informed decisions about beauty and personal care products. 
          We analyze ingredients to help you understand what goes into your products and their potential effects on your health.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600">
              We evaluate products based on scientific research and industry standards to provide accurate safety ratings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Search className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simply scan or search for products to instantly access detailed ingredient analysis and safety information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <AlertTriangle className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
            <p className="text-gray-600">
              We identify potentially harmful ingredients and explain their associated health risks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Leaf className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Beauty</h3>
            <p className="text-gray-600">
              Discover clean and safe alternatives to your favorite products with our comprehensive database.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}