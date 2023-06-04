"use client";
import formatDate from "@/utils/formateDate";
import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setFetching(true);
      try {
        const res = await fetch("/api/order");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchOrders();
  }, []);

  if (fetching) {
    return <h1 className="text-center text-3xl font-bold">Loading...</h1>;
  }

  if (orders.length === 0) {
    return <h1 className="text-center text-3xl font-bold">No orders yet</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Customer Name</th>
              <th className="px-4 py-2 border-b">Customer Email</th>
              <th className="px-4 py-2 border-b">Customer Phone</th>
              <th className="px-4 py-2 border-b">Customer Address</th>
              <th className="px-4 py-2 border-b">Store Name</th>
              <th className="px-4 py-2 border-b">Items</th>
              <th className="px-4 py-2 border-b">Total Price</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-4 py-2 border-b">{order.customerName}</td>
                <td className="px-4 py-2 border-b">{order.customerEmail}</td>
                <td className="px-4 py-2 border-b">{order.customerPhone}</td>
                <td className="px-4 py-2 border-b">{order.customerAddress}</td>
                <td className="px-4 py-2 border-b">{order.storeName}</td>
                <td className="px-4 py-2 border-b">
                  <ul className="list-disc list-inside">
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} (Price: {item.price}, Quantity:{" "}
                        {item.quantity})
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2 border-b">{order.totalPrice}</td>
                <td
                  className={`${
                    order.status === "pending"
                      ? "text-red-500"
                      : "text-green-500"
                  } px-4 py-2 border-b`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2 border-b">
                  {formatDate(order.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
