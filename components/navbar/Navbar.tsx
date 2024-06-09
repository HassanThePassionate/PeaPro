import { ModeToggle } from "../ModeToggle";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Search from "./Search";
import Submit from "./Submit";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white dark:bg-[#0A0E1A]">
      <div className="flex items-center gap-[40px]">
        <Logo />
        <Search />
        <MenuList />
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Submit />
      </div>
    </div>
  );
};

export default Navbar;
