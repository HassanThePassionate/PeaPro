import MovieDetail from "@/components/Movies/MovieDetail";
import Image from "next/image";

export default function Detail() {
  return (
    <div className='relative back'>
      <div className='relative w-full h-[600px] overflow-hidden'>
        <div className='absolute inset-0 z-10 bg-black opacity-50'></div>
        <Image
          src='https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg'
          alt='img'
          layout='fill'
          objectFit='cover'
          className='blur-xl'
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-[600px] flex items-center justify-center z-20'>
        <div className='max-w-[1240px] w-full mx-auto px-4'>
          <MovieDetail />
        </div>
      </div>
    </div>
  );
}
