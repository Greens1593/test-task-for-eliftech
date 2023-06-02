const ShopsList = ({ setMenu, shopsArr }) => {
  return (
    <div className="flex flex-col w-full h-full gap-3 justify-start ">
      <span className="text-center text-xl font-bold">Shops</span>
      <ul className="flex flex-col gap-5">
        {shopsArr.map((shop) => (
          <li
            key={shop.id}
            onClick={() => setMenu(shop.goods)}
            className="flex justify-center text-lg bg-slate-500 hover:bg-blue-300 cursor-pointer p-4 shadow-sm rounded-md"
          >
            {shop.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsList;
