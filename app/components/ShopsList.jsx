"use client";
import Image from "next/image";
const ShopsList = ({ setMenu, shopsArr, setShopName, shopName }) => {
  return (
    <div className="flex flex-col w-full h-full gap-3 justify-start ">
      <span className="text-center text-xl font-bold">Shops</span>
      <ul className="flex flex-col gap-5">
        {shopsArr.map((shop) => (
          <li
            key={shop.id}
            onClick={() => {
              setShopName(shop.name);
              setMenu(shop.goods);
            }}
            className={`flex justify-center gap-5 text-lg ${
              shop.name === shopName
                ? "font-bold bg-slate-500 hover:bg-blue-300"
                : "font-normal bg-slate-400 hover:bg-blue-200"
            } text-white cursor-pointer p-4 shadow-sm rounded-md`}
          >
            <Image
              src={shop.logo}
              alt={shop.name}
              width={30}
              height={30}
              className="rounded-full object-contain bg-slate-50 p-1"
            />
            {shop.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsList;
