"use client";

import { removeCart } from "@/data/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const state = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [deliveriInformation, setDeliveriInformation] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    setTotalPrice(
      state.reduce((acc, item) => acc + item.price * item.count, 0)
    );
  }, [state]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    const order = {
      customerName: deliveriInformation.name,
      customerEmail: deliveriInformation.email,
      customerPhone: deliveriInformation.phone,
      customerAddress: deliveriInformation.address,
      storeName: state[0].shopName,
      items: [
        ...state.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.count,
        })),
      ],
      totalPrice: totalPrice,
      status: "pending",
      createdAt: Date.now(),
    };
    try {
      const res = await fetch("/api/order/new", {
        method: "POST",
        body: JSON.stringify(order),
      });
      if (res.ok) {
        dispatch(removeCart());
        router.push(`/`);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmiting(false);
    }
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
            onChange={(e) =>
              setDeliveriInformation({
                ...deliveriInformation,
                name: e.target.value,
              })
            }
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
            onChange={(e) =>
              setDeliveriInformation({
                ...deliveriInformation,
                email: e.target.value,
              })
            }
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
            onChange={(e) =>
              setDeliveriInformation({
                ...deliveriInformation,
                phone: e.target.value,
              })
            }
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
            onChange={(e) =>
              setDeliveriInformation({
                ...deliveriInformation,
                address: e.target.value,
              })
            }
          />
        </label>
        <p className="absolute bottom-4 right-[10rem] text-center text-lg font-bold">
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
