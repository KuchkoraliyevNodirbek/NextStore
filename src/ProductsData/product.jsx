import React from "react";
import { productData } from "./productData";

const Product = () => {
  return (
    <div className="container mx-auto p-4 pt-[40px] ">
      <h2 className="text-2xl font-semibold mb-4">Kategoriyalar</h2>

      <div className="flex overflow-x-auto space-x-8 p-4  rounded-lg">
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 bg-white border rounded-lg p-4 flex flex-col items-center w-40"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto mb-2"
            />
            <h3 className="text-center text-base font-semibold">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white border border-gray-300 rounded-lg px-8 py-2 w-full ">
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default Product;
