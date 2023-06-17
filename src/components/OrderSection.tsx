import OrderCard from "./OrderCard";

const OrderSection = () => {
  const ordersCategory = [
    {
      id: 1,
      title: "Burger",
      img: "./ordersCategory/krabbyPatty.png",
    },
    {
      id: 2,
      title: "Main Meals",
      img: "./ordersCategory/meals.png",
    },
    {
      id: 3,
      title: "Snacks",
      img: "./ordersCategory/snacks.png",
    },
    {
      id: 2,
      title: "Drinks and Shakes",
      img: "./ordersCategory/drinks.png",
    },
  ];

  return (
    <div className="w-[35rem] h-[20rem] bg-[#D7BA89] rounded-lg flex justify-center items-center">
      <div className="grid grid-cols-2 gap-2">
        {ordersCategory.map((orderCategory) => (
          <button className="">
            <OrderCard orderCategory={orderCategory} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;
