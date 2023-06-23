import Logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import CartList from "./CartList";

const Navbar = () => {
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
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
