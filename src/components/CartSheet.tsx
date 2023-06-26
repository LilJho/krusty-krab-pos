import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { Button } from "./ui/button";
import CartList from "./CartList";
import { AiOutlineShoppingCart } from "react-icons/ai";

export interface IOrderTypes {
  id: number;
  name: string;
  img: string;
  price: number;
  qty?: number;
}

const CartSheet = () => {
  const [order, setOrder] = useState<IOrderTypes[]>([]);

  const handleChange = (item: IOrderTypes, qty: number) => {
    const itemToUpdate = order.find((orderItem) => orderItem.id === item.id);

    if (itemToUpdate) {
      setOrder((prevArr) => {
        return prevArr.map((orderItem) => {
          if (orderItem.id === item.id) {
            return { ...orderItem, qty: qty };
          } else {
            return orderItem;
          }
        });
      });
    } else {
      setOrder((prev) => [...prev, item]);
    }
  };

  const handleSubmit = () => {
    console.log(order);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-[1.5rem] text-center"
        >
          <AiOutlineShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <CartList
          setOrder={setOrder}
          order={order}
          handleChange={handleChange}
        />
        <SheetFooter>
          <div className="flex flex-col items-end">
            <p>
              Total: ${" "}
              {order.reduce(
                (prevVal, currentVal) =>
                  prevVal + currentVal.price * (currentVal.qty || 1),
                0
              )}
            </p>
            <Button onClick={handleSubmit} className="w-full mt-2">
              Proceed to Checkout
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
