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
import { ItemsProps } from "./OrderSection";

interface ICartSheetProps {
  cartItems: ItemsProps[];
}

const CartSheet = ({ cartItems }: ICartSheetProps) => {
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

        <CartList />
        <SheetFooter>
          <p>
            Total: ${" "}
            {cartItems.reduce(
              (prevVal, currentVal) => prevVal + currentVal.price,
              0
            )}
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
