'use client'
import { useState } from "react";
import ShopsList from "./components/ShopsList";
import OrderCard from "./components/OrderCard";

export default function Home() {
  const [items, setItems] = useState([]);
  return (
    <section>
      <ShopsList />
      {items.map((item) => (
        <OrderCard key={item.id} item={item}/>
      ))}
    </section>
  )
}
