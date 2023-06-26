import OrderCard from "./OrderCard";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import OrderMenu from "./OrderMenu";

export interface ItemsProps {
  id: number;
  name: string;
  img: string;
  price: number;
  qty?: number;
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
        {
          id: 1,
          name: "Krabby Patty",
          img: "./menuItems/krabbypatty.png",
          price: 1.25,
        },
        {
          id: 2,
          name: "Double Krabby Patty",
          img: "./menuItems/doublekrabbypatty.png",
          price: 2.0,
        },
        {
          id: 3,
          name: "Triple Krabby Patty",
          img: "./menuItems/triplekrabbypatty.png",
          price: 3.0,
        },
        {
          id: 4,
          name: "Krabby Footlong",
          img: "./menuItems/footlong.png",
          price: 2.0,
        },
      ],
    },
    {
      id: 2,
      title: "Main Meals",
      img: "./ordersCategory/meals.png",
      items: [
        {
          id: 5,
          name: "Kiddie Meal",
          img: "./menuItems/krabbymeal.jpg",
          price: 2.75,
        },
        {
          id: 6,
          name: "Superhero Meal",
          img: "./menuItems/heromeal.jpg",
          price: 3.75,
        },
        {
          id: 7,
          name: "Supermeal Jollibee",
          img: "./menuItems/supermealjabe.png",
          price: 5.25,
        },
      ],
    },
    {
      id: 3,
      title: "Snacks",
      img: "./ordersCategory/snacks.png",
      items: [
        {
          id: 8,
          name: "Coral Bits",
          img: "./menuItems/coralbits.webp",
          price: 1.5,
        },
        {
          id: 9,
          name: "Golden Loaf",
          img: "./menuItems/goldenload.webp",
          price: 2.0,
        },
        {
          id: 10,
          name: "Kelp Fries",
          img: "./menuItems/kelpfries.jpg",
          price: 1.25,
        },
      ],
    },
    {
      id: 4,
      title: "Drinks",
      img: "./ordersCategory/drinks.png",
      items: [
        {
          id: 11,
          name: "Kelp Shake",
          img: "./menuItems/kelpshake.jpg",
          price: 2.0,
        },
        {
          id: 12,
          name: "Seafoam Soda",
          img: "./menuItems/seafoamsoda.jpg",
          price: 1.25,
        },
        {
          id: 13,
          name: "Milkshake",
          img: "./menuItems/milkshake.webp",
          price: 2.25,
        },
        {
          id: 14,
          name: "Krabby Kola",
          img: "./menuItems/krabbykola.webp",
          price: 1.5,
        },
      ],
    },
  ];

  return (
    <div className="w-[35rem] h-[20rem] bg-[#D7BA89] rounded-lg flex justify-center items-center">
      <div className="grid grid-cols-2 gap-2">
        {ordersCategory.map((orderCategory) => (
          <Dialog key={orderCategory.id}>
            <DialogTrigger asChild>
              <button className="z-10 transition-all cursor-pointer hover:scale-105">
                <OrderCard orderCategory={orderCategory} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <OrderMenu
                items={orderCategory.items}
                title={orderCategory.title}
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;
