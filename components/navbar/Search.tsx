"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Suggestion from "./Suggestion";
import { useState, useRef, useEffect } from "react";

const Search = () => {
  const [isSuggestionVisible, setSuggestionVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSuggestionVisible(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setSuggestionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className='relative' ref={ref}>
      <div
        className='flex items-center border px-6 rounded-full bg-gray-100 dark:bg-[#444] dark:text-white'
        onClick={handleClick}
      >
        <span>
          <SearchIcon size={18} className='text-gray-400' />
        </span>
        <Input
          className='border-none bg-transparent w-full'
          placeholder='Search movies, TV series, animes, actors '
        />
      </div>
      {isSuggestionVisible && (
        <div className='absolute top-full left-0 right-0 mt-2'>
          <Suggestion />
        </div>
      )}
    </div>
  );
};

export default Search;
