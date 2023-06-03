"use client";

import { useSelector } from "react-redux";
import Form from "../components/Form";
import OrderCard from "../components/OrderCard";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <section className="w-full flex flex-col md:flex-row justify-start gap-6 relative pb-[70px]">
      <div className="w-full md:w-1/3 rounded-md p-5 shadow-slate-700 shadow-sm">
        <Form />
      </div>
      <div className="w-full md:w-2/3 shadow-slate-700 shadow-sm rounded-md p-5 flex flex-col gap-4">
        {cartItems.length === 0 ? (
          <h2 className="text-center text-3xl font-bold">Your cart is empty</h2>
        ) : (
          cartItems.map((item) => <OrderCard key={item?.id} item={item} />)
        )}
      </div>
    </section>
  );
};

export default page;
