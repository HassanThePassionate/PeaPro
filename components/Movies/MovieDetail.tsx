import Image from "next/image";
import MovieTags from "./MovieTags";
import { Button } from "../ui/button";
import { Bookmark, PlayCircle } from "lucide-react";
import { BiSolidMovie } from "react-icons/bi";
import { Badge } from "../ui/badge";
import { GoStarFill } from "react-icons/go";
import { BiHomeHeart } from "react-icons/bi";
const MovieDeatil = () => {
  return (
    <div>
      <div className='flex sm:gap-[64px] gap-[32px]'>
        <div className='relative'>
          <Image
            src='https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg'
            alt='img'
            width={140}
            height={214}
            className='rounded-sm'
          />
          <Badge className='bg-[#45B164] hidden sm:block hover:bg-[#45B164] rounded-[2px] text-center absolute bottom-2 right-3'>
            <span className='flex items-center gap-1  sm:text-[12px]'>
              <GoStarFill size={14} color='yellow' />
              7.1
            </span>
          </Badge>
        </div>

        <div>
          <h2 className='sm:text-[32px] text-[24px] leading-10 mb-6'>
            Evil Dead Rising
          </h2>
          <ul className='flex flex-col gap-4 text-sm'>
            <li>Reviews: 167K</li>
            <li>Tomatometer: 92%</li>
            <li>Rating: PG</li>
            <li>Duration: 99 Minutes</li>
          </ul>
        </div>
      </div>
      <p className='mt-4 mb-2'>
        Two couples move into the same building on the same day. When they
        discover their spouses are having an affair, the two neighbors become
        friends and try to replicate the infidelity of their partners. However,
        they end up falling in love for real and decide to break up and go their
        separate ways. In the end, both couples have split up and are alone.
      </p>
      <div className='flex gap-4 text-sm text-[#666] cursor-pointer'>
        <h4>Romance Drama</h4>
        <ul className=' list-disc  ml-3'>
          <li>Drama</li>
        </ul>
      </div>
      <ul className='mt-4 flex flex-col gap-2 text-sm'>
        <li>
          <strong>Directors:</strong> Wong Kar-wai
        </li>
        <li>
          <strong>Cast:</strong> Maggie Cheung Man-Yuk Tony Leung Chiu-wai
        </li>
      </ul>
      <div className='flex gap-3 flex-wrap mt-4'>
        <MovieTags text='Neightbor' />
        <MovieTags text='Romantic Drama' />
        <MovieTags text='Neighbor Neighbor Relationship' />
        <MovieTags text='Extramarital Affair' />
        <MovieTags text='Secret Love' />
        <MovieTags text='Forbidden Love' />
      </div>
      <div className='mt-6 flex items-center gap-4 flex-wrap mb-1'>
        <Button className='flex gap-3 border-dotted border-2 border-[#999] hover:bg-transparent hover:border-black bg-transparent text-black dark:text-white'>
          <PlayCircle />
          Watch Trailer
        </Button>
        <Button className='flex gap-3 border-dotted border-2 border-[#999] hover:bg-transparent hover:border-black bg-transparent text-black dark:text-white'>
          <BiSolidMovie size={24} />
          Where to Watch
        </Button>
        <Button
          size='icon'
          className='flex gap-3 border-dotted border-2 border-[#999] hover:bg-transparent hover:border-black bg-transparent text-black dark:text-white'
        >
          <Bookmark />
        </Button>
      </div>
    </div>
  );
};

export default MovieDeatil;
