import React from "react";
import { Clocthescategory } from "../data/file";
import { useNavigate } from "react-router-dom";

const ClocthesCard = ({ category }) => {
  const logoUrl = "/image/Vector.png";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Checkout/${category.id}`);
  };
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-44 object-cover bg-gray-200"
      />
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-gray-900">
            Rp. {category.price.toLocaleString("id-ID")}
          </h3>
          <span className="text-sm text-gray-500 line-through ">
            Rp. {category.oldPrice.toLocaleString("id-ID")}
          </span>
          <span className="text-sm text-red-600 font-bold ml-2">
            {category.discount}
          </span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <img src={logoUrl} alt="" />
          <span className="ml-1 font-semibold">{category.rating}</span>
          <span className="ml-1">| {category.sold} terjual</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container gap-10">
      <h2 className="text-center justify-center text-3xl font-bold pt-10 text-transparent bg-gradient-to-r
        from-brandblue to-blue-500 bg-clip-text">
        FOR YOU
      </h2>
      <h3 className="text-center justify-center text-xs">FEATURED ITEM</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pt-10">
        {Clocthescategory.map((category) => (
          <ClocthesCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
