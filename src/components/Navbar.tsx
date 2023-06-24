import Logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "../components/ui/sheet";
import CartList from "./CartList";
import { useAppSelector } from "../hooks/hooks";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart);
  return (
    <nav className="flex items-center justify-between w-full px-2">
      <img className="w-[5rem] " src={Logo} alt="logo" />
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
    </nav>
  );
};

export default Navbar;
