import Order from "@/models/order";
import connectToDb from "@/utils/database";

export const POST = async (req) => {
  const orderData = await req.json();
  try {
    await connectToDb();
    const order = await Order.create(orderData);
    return new Response(JSON.stringify(order), { status: 201 });
  } catch (error) {
    return new Response("Failed to create order", { status: 500 });
  }
};
