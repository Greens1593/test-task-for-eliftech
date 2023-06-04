"use client";

import { useDispatch } from "react-redux";
import Image from "next/image";
import { changeQuantity, removeAllItems } from "@/data/cartSlice";
import { useEffect, useState } from "react";

// Component for rendering an order card
const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(+item.count);

  useEffect(() => {
    // Dispatch the changeQuantity action when the quantity state changes
    dispatch(changeQuantity({ ...item, count: quantity }));
  }, [quantity]);

  return (
    <div className="shadow-slate-700 shadow-sm rounded-md p-5 bg-slate-100 hover:bg-slate-300 flex justify-center gap-5 relative">
      <div className="w-2/3 bg-gray-300 rounded-lg flex justify-center overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={250}
          height={70}
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="w-1/3 p-4 flex flex-col">
        <div className="flex flex-col justify-between">
          <h2 className="text-center text-lg font-bold mb-2">{item.name}</h2>
          <h2 className="text-center text-lg font-bold">Price ${item.price}</h2>
        </div>
        <div className="flex flex-col items-center justify-between">
          <input
            type="number"
            min={1}
            max={999}
            className="mt-4 mb-3 w-full text-center"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)} // Ensure quantity is converted to a number
          />
          <button
            type="button"
            onClick={() => {
              dispatch(removeAllItems(item));
            }}
            className="w-[84px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 text-sm px-4 rounded-md"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
