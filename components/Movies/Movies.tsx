import Heading from "@/components/Heading";
import MovieCard from "@/components/MovieCard";
import { TbMovie } from "react-icons/tb";
import data from "@/constant/moviesData";
const Movies = () => {
  return (
    <>
      <Heading title="Recently Popular" icon={TbMovie} />
      <div className="bg-white dark:bg-[#43444A] rounded-[16px] py-[32px] px-6 grid grid-cols-7 gap-x-[34px] gap-y-[24px]">
        {data.map((movie) => (
          <MovieCard key={movie.title} {...movie} size={80} />
        ))}
      </div>
    </>
  );
};

export default Movies;
