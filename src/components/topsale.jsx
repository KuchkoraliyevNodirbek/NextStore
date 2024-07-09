import React from "react";
import { TopsaleData } from "./topsaleData";
import Korzinkaicon from "./navbar/navbar-logos/korzinka-icon";

const Topsale = () => {
  return (
    <div className="bg-blue-50 p-8 container">
      <h2 className="text-2xl font-bold mb-6">Eng ko'p sotilgan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {TopsaleData.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 relative"
          >
            {product.badge && (
              <span
                className={`absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-sm rounded-br-lg ${
                  product.badge === "Top sale" ? "bg-red-500" : "bg-orange-500"
                }`}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <div className="h-[190px]">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-xl font-bold mb-2">{product.price}</p>
              <p className="text-gray-500 mb-4">{product.order}</p>
            </div>

            <div className="flex justify-between items-center">
              {" "}
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Sotib olish
              </button>
              <button>
                <Korzinkaicon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white border border-gray-300 rounded-lg px-8 py-2 w-full ">
          Koproq korish
        </button>
      </div>
    </div>
  );
};

export default Topsale;
