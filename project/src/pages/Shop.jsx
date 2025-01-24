import React from 'react';

function Shop() {
  const products = [
    { id: 1, name: 'Classic White Shirt', price: '$89', category: 'Tops' },
    { id: 2, name: 'Leather Jacket', price: '$299', category: 'Outerwear' },
    { id: 3, name: 'Silk Scarf', price: '$59', category: 'Accessories' },
    { id: 4, name: 'Wool Coat', price: '$399', category: 'Outerwear' },
    { id: 5, name: 'Denim Jeans', price: '$129', category: 'Bottoms' },
    { id: 6, name: 'Cotton T-Shirt', price: '$39', category: 'Tops' },
    { id: 7, name: 'Leather Belt', price: '$79', category: 'Accessories' },
    { id: 8, name: 'Cashmere Sweater', price: '$199', category: 'Tops' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 fade-in">
      <h1 className="text-4xl font-light mb-16">Shop All</h1>
      
      {/* Filters */}
      <div className="mb-16">
        <div className="flex flex-wrap gap-8">
          <select className="bg-black border border-zinc-800 rounded-none px-6 py-3 text-gray-400 focus:border-white transition-colors duration-300">
            <option>All Categories</option>
            <option>Tops</option>
            <option>Bottoms</option>
            <option>Outerwear</option>
            <option>Accessories</option>
          </select>
          <select className="bg-black border border-zinc-800 rounded-none px-6 py-3 text-gray-400 focus:border-white transition-colors duration-300">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <div key={product.id} className="group hover-lift">
            <div className="aspect-w-1 aspect-h-1 w-full mb-6 bg-zinc-900 product-card"></div>
            <h3 className="text-lg font-light">{product.name}</h3>
            <p className="mt-2 text-gray-400">{product.category}</p>
            <p className="mt-2 text-gray-400">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
