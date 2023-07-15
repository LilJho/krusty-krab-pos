import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { Button } from "./ui/button";
import CartList from "./CartList";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export interface IOrderTypes {
  id: number;
  name: string;
  img: string;
  price: number;
  qty?: number;
}

interface IPersonOrderTypes {
  name: string;
  order: IOrderTypes[];
}

const CartSheet = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrderTypes[]>([]);
  const [personOrder, setPersonOrder] = useState<IPersonOrderTypes>({
    name: "",
    order: [],
  });
  const [toogle, setToogle] = useState<boolean>(false);

  const handleChangeQty = (item: IOrderTypes, qty: number) => {
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
    setPersonOrder((prevState) => ({ ...prevState, order: order }));
  };

  const handleSubmit = async () => {
    if (personOrder.order.length > 0 && personOrder.name !== "") {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/orderData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personOrder),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
        setOrder([]);
        setPersonOrder({ name: "", order: [] });
        setTimeout(() => {
          setToogle(!toogle);
        }, 2000);
      }
    } else {
      alert("Choose your favourite dishes and please provide your name!");
    }
  };

  return (
    <Sheet open={toogle} onOpenChange={setToogle}>
      <Button
        variant={"outline"}
        size={"sm"}
        className="text-[1.5rem] text-center"
        onClick={() => setToogle(!toogle)}
      >
        <AiOutlineShoppingCart />
      </Button>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <CartList
          setOrder={setOrder}
          order={order}
          handleChangeQty={handleChangeQty}
        />
        <SheetFooter>
          <div className="flex flex-col items-end">
            <div>
              <Label>Your Name</Label>
              <Input
                type="text"
                required
                name="order"
                value={personOrder.name}
                onChange={(e) => {
                  setPersonOrder((prevObj) => ({
                    ...prevObj,
                    name: e.target.value,
                  }));
                  setPersonOrder((prevState) => ({
                    ...prevState,
                    order: order,
                  }));
                }}
              />
            </div>

            <p>
              Total: ${" "}
              {order.reduce(
                (prevVal, currentVal) =>
                  prevVal + currentVal.price * (currentVal.qty || 1),
                0
              )}
            </p>

            <Button onClick={handleSubmit} className="w-full mt-2">
              {loading ? "Loading..." : "Proceed to Checkout"}
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
