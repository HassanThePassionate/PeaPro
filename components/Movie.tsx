import Data from "@/constant/moviesData";
import MovieCard from "./MovieCard";
const Movie = () => {
  const data = Data.slice(0, 7);
  return (
    <div className="bg-white dark:bg-[#43444A] rounded-[16px] py-[32px] px-6 grid grid-cols-7 gap-x-[34px] gap-y-[24px] ">
      {data.map((movie) => (
        <MovieCard key={movie.title} {...movie} size={168} />
      ))}
    </div>
  );
};

export default Movie;
