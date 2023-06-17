import Logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-2">
      <img className="w-[5rem] " src={Logo} alt="logo" />
      <span className="p-1 text-[2rem] transition-all duration-300 hover:bg-blue-700 hover:rounded-full hover:text-white">
        <AiOutlineShoppingCart />
      </span>
    </nav>
  );
};

export default Navbar;
