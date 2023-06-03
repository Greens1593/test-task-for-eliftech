"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/data/cartSlice";

const ItemCard = ({ item, shopName }) => {
  const items = useSelector((state) => state.cart.items);
  let isAlredyInCart = items.filter((i) => i.id === item.id).length > 0;
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem({ ...item, shopName }));
    isAlredyInCart = true;
  };
  const isActive =
    (items[0]?.shopName === shopName || items.length === 0) && !isAlredyInCart;
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
        <div className="flex justify-between">
          <h2 className="text-start text-lg font-bold mb-2">{item.name}</h2>
          <h2 className="text-end text-lg font-bold">${item.price}</h2>
        </div>
        <button
          type="button"
          onClick={() => {
            isActive
              ? handleCart(item)
              : alert(
                  `${
                    isAlredyInCart
                      ? "Item already in cart"
                      : "You can add items only from one shop"
                  }`
                );
          }}
          className={`ml-auto ${
            isActive ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-300"
          }  text-white font-bold py-2 text-sm px-4 rounded-md`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
