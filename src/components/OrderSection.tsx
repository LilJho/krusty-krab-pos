import OrderCard from "./OrderCard";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import OrderMenu from "./OrderMenu";

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
      id: 4,
      title: "Drinks ",
      img: "./ordersCategory/drinks.png",
    },
  ];

  return (
    <div className="w-[35rem] h-[20rem] bg-[#D7BA89] rounded-lg flex justify-center items-center">
      <div className="grid grid-cols-2 gap-2">
        {ordersCategory.map((orderCategory) => (
          <Dialog>
            <DialogTrigger asChild>
              <button className="z-10 transition-all cursor-pointer hover:scale-105">
                <OrderCard orderCategory={orderCategory} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <OrderMenu />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;
