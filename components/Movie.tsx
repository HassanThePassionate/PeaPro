import Data from "@/constant/moviesData";
import MovieCard from "./MovieCard";
const Movie = () => {
  const data = Data.slice(0, 7);
  return (
    <div className='bg-white dark:bg-[#43444A] rounded-[16px] py-[32px] grid-cols-3 gap-2 px-6 grid sm:grid-cols-5 sm:gap-4   lg:grid-cols-6 lg:gap-x-[14px] lg:gap-y-[16px] xl:grid-cols-7 xl:gap-x-[34px] xl:gap-y-[24px] '>
      {data.map((movie) => (
        <MovieCard key={movie.title} {...movie} size={168} />
      ))}
    </div>
  );
};

export default Movie;
