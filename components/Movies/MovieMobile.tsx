"use client";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import Logo from "../navbar/Logo";
import MobileMenu from "../navbar/mobieNav/MobieMenu";
import Searchbar from "../navbar/Search";
const MovieMobile = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openSearch, setOpenSearch] = useState(true);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <>
      {openSearch ? (
        <div className='flex items-center justify-between px-8 py-4 xl:hidden '>
          <Logo />
          <div className='flex items-center gap-4'>
            <Search
              onClick={handleSearch}
              className='cursor-pointer'
              color='white'
            />
            <ModeToggle />
            <div className='flex'>
              {openMenu ? (
                <Menu
                  onClick={handleMenu}
                  className='cursor-pointer'
                  color='white'
                />
              ) : (
                <X
                  onClick={handleMenu}
                  className='cursor-pointer'
                  color='white'
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-screen fixed z-20  bg-white dark:bg-[#2D2F3C] top-0 w-full flex justify-center gap-3 '>
          <div className='flex-1 mt-3 mx-2'>
            <Searchbar />
          </div>
          <X className='mt-6 mr-2 cursor-pointer' onClick={handleSearch} />
        </div>
      )}

      <div
        className={`${
          openMenu ? "opacity-0" : "opacity-1"
        } absolute right-2 z-10 mt-1 transition duration-500`}
      >
        <MobileMenu />
      </div>
    </>
  );
};

export default MovieMobile;
