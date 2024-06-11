import { ModeToggle } from "../ModeToggle";
import Logo from "../navbar/Logo";
import MobileNav from "../navbar/mobieNav/MobileNav";
import MenuList from "../navbar/MenuList";
import Submit from "../navbar/Submit";
import Search from "../navbar/Search";
import MovieMobile from "./MovieMobile";

const MovieNav = () => {
  return (
    <>
      <MovieMobile />
      <div className=' items-center justify-between px-8 py-4 text-[#999]  hidden xl:flex '>
        <div className='flex items-center gap-[40px]'>
          <Logo />
          <Search />
          <MenuList />
        </div>
        <div className='flex items-center gap-5'>
          <ModeToggle />
          <Submit />
        </div>
      </div>
    </>
  );
};

export default MovieNav;
