import Logo from "../assets/logo.svg";
import CartSheet from "./CartSheet";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-2">
      <img className="w-[5rem] " src={Logo} alt="logo" />
      <CartSheet />
    </nav>
  );
};

export default Navbar;
