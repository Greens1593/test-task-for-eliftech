"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const state = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmiting, setIsSubmiting] = useState(false);
  useEffect(() => {
    setTotalPrice(
      state.reduce((acc, item) => acc + item.price * item.count, 0)
    );
  }, [state]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Add your contact information
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <label className="form_label">
          <span className="ml-2">Name</span>
          <input
            className="form_input"
            type="text"
            placeholder="Add your name"
            id="name"
            required
          />
        </label>

        <label className="form_label">
          <span className="ml-2">Email</span>
          <input
            className="form_input"
            type="email"
            placeholder="email@example.com"
            id="email"
            required
          />
        </label>

        <label className="form_label">
          <span className="ml-2">Your phone</span>
          <input
            className="form_input"
            type="tel"
            placeholder="+ 38 (000) 000-00-00"
            id="phone"
            required
          />
        </label>

        <label className="form_label">
          <span className="ml-2">Email</span>
          <input
            className="form_input"
            type="text"
            placeholder="City, street, house number"
            id="address"
            required
          />
        </label>
        <p className="absolute bottom-4 right-[7rem] text-center text-lg font-bold">
          Total price ${totalPrice}
        </p>
        <button
          type="submit"
          className="absolute right-3 bottom-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 text-sm px-4 rounded-md"
        >
          {isSubmiting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
