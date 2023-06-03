"use client";
const OrderCard = ({ item }) => {
  return (
    <div className="p-4 flex flex-col gap-2 justify-center bg-slate-200">
      <Image src={item.image} alt={item.name} className="object-contain" />
    </div>
  );
};

export default OrderCard;
