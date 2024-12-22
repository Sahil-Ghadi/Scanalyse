import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Scanalyse Your Beauty Products
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Instantly analyze ingredients and check safety ratings of your beauty products
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your search.</p>
        </div>
      )}
    </main>
  );
}