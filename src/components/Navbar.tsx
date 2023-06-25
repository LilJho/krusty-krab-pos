import Logo from "../assets/logo.svg";

import { useAppSelector } from "../hooks/hooks";
import CartSheet from "./CartSheet";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart);

  return (
    <nav className="flex items-center justify-between w-full px-2">
      <img className="w-[5rem] " src={Logo} alt="logo" />
      <CartSheet cartItems={cartItems} />
    </nav>
  );
};

export default Navbar;
