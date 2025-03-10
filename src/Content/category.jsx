import React from "react";
import { products } from "../data/file";

const ProductCard = ({ product }) => {
  const logoUrl = "/image/Vector.png";
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-30 object-cover"
      />
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-gray-900">
            Rp. {product.price.toLocaleString("id-ID")}
          </h3>
          <span className="text-sm text-gray-500 line-through ">
            Rp. {product.oldPrice.toLocaleString("id-ID")}
          </span>
          <span className="text-sm text-red-600 font-bold ml-2">
            {product.discount}
          </span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <img src={logoUrl} alt="" />
          <span className="ml-1 font-semibold">{product.rating}</span>
          <span className="ml-2">| {product.sold} terjual</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container">
      <h2 className="text-center justify-center text-3xl font-bold pt-10 text-transparent bg-gradient-to-r from-brandblue to-blue-500 bg-clip-text">
        FOR YOU
      </h2>
      <h3 className="text-center justify-center text-xs">FEATURED ITEM</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
