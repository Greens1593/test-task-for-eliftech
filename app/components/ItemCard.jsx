import React from "react";
import Image from "next/image";

const ItemCard = ({ item }) => {
  return (
    <div className="sm:w-full shadow-slate-700 shadow-sm rounded-md p-5 bg-slate-100 hover:bg-slate-300 flex flex-col justify-between">
      <div className="h-25 bg-gray-300 rounded-t-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={150}
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="text-start text-lg font-bold mb-2">{item.name}</h2>
        <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-sm px-4 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
