import Image from "next/image";
import { Badge } from "./ui/badge";
import { GoStarFill } from "react-icons/go";
import Link from "next/link";
interface MovieCardProps {
  title: string;
  img: string;
  size: number;
}
const MovieCard = ({ title, img, size }: MovieCardProps) => {
  return (
    <Link href='/detail'>
      <div className='relative cursor-pointer hover:scale-110 transition duration-300  '>
        <Image
          src={img}
          alt='Movie Image'
          width={120}
          height={size}
          className='rounded-[8px]  '
        />
        <h4 className='mt-1 text-sm'>{title}</h4>
        <Badge className='bg-[#45B164] hover:bg-[#45B164] rounded-[2px] text-center absolute bottom-9 left-2'>
          <span className='flex items-center gap-1 sm:text-[12px]'>
            <GoStarFill size={14} color='yellow' />
            7.1
          </span>
        </Badge>
      </div>
    </Link>
  );
};

export default MovieCard;
