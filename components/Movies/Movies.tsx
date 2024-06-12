import Heading from "@/components/Heading";
import MovieCard from "@/components/MovieCard";
import { TbMovie } from "react-icons/tb";
import data from "@/constant/moviesData";
interface MovieProps {
  read: string;
  padding: string;
}
const Movies = ({ read, padding }: MovieProps) => {
  return (
    <>
      <Heading title='Recently Popular' icon={TbMovie} read={read} />
      <div
        className={`bg-white dark:bg-[#43444A] rounded-[16px] py-[32px] min-[400px]:grid-cols-3 grid-cols-2 gap-2 ${padding} grid sm:grid-cols-5 sm:gap-4 lg:grid-cols-6 lg:gap-x-[14px] lg:gap-y-[16px] xl:grid-cols-7 xl:gap-x-[34px] xl:gap-y-[24px]`}
      >
        {data.map((movie, i) => (
          <MovieCard key={i} {...movie} size={80} />
        ))}
      </div>
    </>
  );
};

export default Movies;
