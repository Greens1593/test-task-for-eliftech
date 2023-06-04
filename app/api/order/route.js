import Order from "@/models/order";
import connectToDb from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDb();
    const orders = await Order.find();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch orders", { status: 500 });
  }
};
