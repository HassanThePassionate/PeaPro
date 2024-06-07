import Image from "next/image";
interface MovieCardProps {
  title: string;
  img: string;
  size: number;
}
const MovieCard = ({ title, img, size }: MovieCardProps) => {
  return (
    <div>
      <div className='relative cursor-pointer '>
        <Image
          src={img}
          alt='Movie Image'
          width={120}
          height={size}
          className='rounded-lg hover:scale-110 transition duration-300 hover:shadow-xl'
        />
        <h4 className='mt-1'>{title}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
