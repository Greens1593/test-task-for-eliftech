"use client";
import { useEffect, useState } from "react";
import ShopsList from "./components/ShopsList";
import { shops } from "@/data/shops";
import ItemCard from "./components/ItemCard";

export default function Home() {
  const [shopsArr, setShopsArr] = useState([]);
  const [menu, setMenu] = useState([]);
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    setShopsArr(shops);
  });
  return (
    <section className="w-full flex flex-row justify-start gap-6">
      <div className="w-1/3 rounded-md p-5 shadow-slate-700 shadow-sm">
        <ShopsList
          shopsArr={shopsArr}
          setMenu={setMenu}
          setShopName={setShopName}
          shopName={shopName}
        />
      </div>
      {menu.length === 0 ? (
        <h2 className="text-center text-3xl font-bold">Choose a shop</h2>
      ) : (
        <div className="w-2/3 shadow-slate-700 shadow-sm rounded-md p-5 md:grid md:grid-cols-2 sm:flex sm:flex-col sm:gap-4 flex flex-col gap-4">
          {menu.map((item) => (
            <ItemCard key={item?.id} item={item} shopName={shopName} />
          ))}
        </div>
      )}
    </section>
  );
}
