import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-pink-500" />
            <span className="font-bold text-xl text-gray-800">Scanalyse</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/products" className={isActive('/products')}>Products</Link>
            <Link to="/categories" className={isActive('/categories')}>Categories</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}