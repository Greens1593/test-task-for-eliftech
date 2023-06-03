"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const path = usePathname();
  return (
    <nav className="w-full pb-4 pt-4 mb-4 bg-slate-100 sticky z-10 opacity-80 top-0 left-0 right-0">
      <ul className="flex flex-row justify-start">
        <li
          className={`pl-4 pr-10 hover:text-blue-400  border-r-2 border-black ${
            path === "/" ? "text-blue-700 font-bold" : "text-blue-600"
          }`}
        >
          <Link href="/">Shop</Link>
        </li>
        <li
          className={`pr-4 pl-10 hover:text-blue-400 ${
            path === "/" ? "text-blue-600" : "text-blue-700 font-bold"
          }`}
        >
          <Link href="/cart" className="relative">
            Shopping cart
            {cartItems.length > 0 && (
              <span className="ml-1 absolute top-0 right--1 text-xs font-bold text-red-500">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
