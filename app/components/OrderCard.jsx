"use client";

import { useDispatch } from "react-redux";
import Image from "next/image";
import { changeQuantity, removeAllItems } from "@/data/cartSlice";
import { useEffect, useState } from "react";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(+item.count);
  useEffect(() => {
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
      <div className="w-1/3 p-4 flex flex-col ">
        <div className="flex flex-col justify-between">
          <h2 className="text-center text-lg font-bold mb-2">{item.name}</h2>
          <h2 className="text-center text-lg font-bold">Price ${item.price}</h2>
        </div>
        <form>
          <input
            type="number"
            className="mt-4 w-full text-center"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </form>
        <button
          type="button"
          onClick={() => {
            dispatch(removeAllItems(item));
          }}
          className={`absolute right-3 bottom-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 text-sm px-4 rounded-md`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
