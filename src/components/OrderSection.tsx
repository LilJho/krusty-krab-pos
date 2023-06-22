import OrderCard from "./OrderCard";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import OrderMenu from "./OrderMenu";

export interface ItemsProps {
  id: number;
  name: string;
  img: string;
}

interface OrdersCategoryProps {
  id: number;
  title: string;
  img: string;
  items: ItemsProps[];
}

const OrderSection = () => {
  const ordersCategory: OrdersCategoryProps[] = [
    {
      id: 1,
      title: "Burger",
      img: "./ordersCategory/krabbyPatty.png",
      items: [
        { id: 1, name: "Krabby Patty", img: "./menuItems/krabbypatty.png" },
        {
          id: 2,
          name: "Double Krabby Patty",
          img: "./menuItems/doublekrabbypatty.png",
        },
        {
          id: 3,
          name: "Triple Krabby Patty",
          img: "./menuItems/triplekrabbypatty.png",
        },
        { id: 4, name: "Krabby Footlong", img: "./menuItems/footlong.png" },
      ],
    },
    {
      id: 2,
      title: "Main Meals",
      img: "./ordersCategory/meals.png",
      items: [
        { id: 1, name: "Kiddie Meal", img: "./menuItems/krabbymeal.jpg" },
        { id: 2, name: "Superhero Meal", img: "./menuItems/heromeal.jpg" },
        {
          id: 3,
          name: "Supermeal Jollibee",
          img: "./menuItems/supermealjabe.png",
        },
      ],
    },
    {
      id: 3,
      title: "Snacks",
      img: "./ordersCategory/snacks.png",
      items: [
        { id: 1, name: "Coral Bits", img: "./menuItems/coralbits.webp" },
        { id: 2, name: "Golden Loaf", img: "./menuItems/goldenload.webp" },
        { id: 3, name: "Kelp Fries", img: "./menuItems/kelpfries.jpg" },
      ],
    },
    {
      id: 4,
      title: "Drinks ",
      img: "./ordersCategory/drinks.png",
      items: [
        { id: 1, name: "Kelp Shake", img: "./menuItems/kelpshake.jpg" },
        { id: 2, name: "Seafoam Soda", img: "./menuItems/seafoamsoda.jpg" },
        { id: 3, name: "Milkshake", img: "./menuItems/milkshake.webp" },
        { id: 4, name: "Krabby Kola", img: "./menuItems/krabbykola.webp" },
      ],
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
              <OrderMenu items={orderCategory.items} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;
