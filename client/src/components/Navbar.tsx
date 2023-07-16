import Logo from "../assets/logo.svg";
import CartSheet from "./CartSheet";
import LoginCard from "./login/LoginCard";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-2">
      <img className="md:w-[5rem] w-[2.5rem] " src={Logo} alt="logo" />
      <div className="flex items-center justify-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Admin</Button>
          </DialogTrigger>
          <DialogContent>
            <LoginCard />
          </DialogContent>
        </Dialog>

        <CartSheet />
      </div>
    </nav>
  );
};

export default Navbar;
