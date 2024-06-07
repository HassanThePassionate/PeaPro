import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div>
      <div className='flex items-center border px-6 rounded-full bg-gray-100 dark:bg-[#444] dark:text-white'>
        <span>
          <SearchIcon size={18} className='text-gray-400' />
        </span>
        <Input
          className='border-none bg-transparent w-full'
          placeholder='Search movies, TV series, animes, actors '
        />
      </div>
    </div>
  );
};

export default Search;
