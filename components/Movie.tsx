import Data from "@/constant/moviesData";
import MovieCard from "./MovieCard";
const Movie = () => {
  const data = Data.slice(0, 7);
  return (
    <div className='bg-white dark:bg-[#333] rounded-md px-6 py-6 grid grid-cols-7 gap-3'>
      {data.map((movie) => (
        <MovieCard key={movie.title} {...movie} size={168} />
      ))}
    </div>
  );
};

export default Movie;
