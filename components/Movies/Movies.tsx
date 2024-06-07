import Heading from "@/components/Heading";
import MovieCard from "@/components/MovieCard";
import { TbMovie } from "react-icons/tb";
import data from "@/constant/moviesData";
const Movies = () => {
  return (
    <>
      <Heading title='Recently Popular' icon={TbMovie} />
      <div className='bg-white dark:bg-[#333] rounded-md px-6 py-8 grid grid-cols-7 gap-3'>
        {data.map((movie) => (
          <MovieCard key={movie.title} {...movie} size={120} />
        ))}
      </div>
    </>
  );
};

export default Movies;
