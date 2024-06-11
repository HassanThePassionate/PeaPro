"use client";
import React, { useState } from "react";
import Image from "next/image";
import MovieTags from "./MovieTags";
import { Bookmark, PlayCircle } from "lucide-react";
import { BiSolidMovie } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { BiHomeHeart } from "react-icons/bi";
import Link from "next/link";

const MovieDetail = () => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const description =
    "Two couples move into the same building on the same day. When they discover their spouses are having an affair, the two neighbors become friends and try to replicate the infidelity of their partners. However, they end up falling in love for real and decide to break up and go their separate ways.";

  return (
    <div className='text-white'>
      <div className='flex gap-5 items-center'>
        <div className='relative'>
          <Image
            src='https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg'
            alt='img'
            width={84}
            height={129}
            className='border border-[#e6e6e6]'
          />
        </div>

        <div>
          <div className='text-[12px] text-[#f5f5f5]'>MOVIE</div>
          <Link
            href='#'
            className='text-[18px] md:text-[20px] leading-[30px] hover:border-dotted hover:border-[#6eda78] hover:border-b font-bold hover:text-[#6eda78]'
          >
            In the Mood for Love (2000)
          </Link>
          <ul className='flex items-center mt-4'>
            <li className='flex flex-col items-center pr-2 md:pr-5 relative md:before:h-[24px] md:before:w-[1px] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-0 md:before:bg-[#e8e8e8] md:first-of-type:before:content-none before:opacity-0 md:before:opacity-100'>
              <div className='flex items-center gap-1 text-sm'>
                8.1
                <GoStarFill size={14} />
              </div>
              <div className='text-[#969696] text-[12px] hidden md:inline-block'>
                167K reviews
              </div>
            </li>
            <li className='flex flex-col items-center px-2 md:px-5 relative md:before:h-[24px] md:before:w-[1px] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-0 md:before:bg-[#e8e8e8] md:first-of-type:before:content-none before:opacity-0 md:before:opacity-100'>
              <div className='flex items-center gap-1 text-sm'>
                <Image
                  src='https://similarwatch.com/images/tomato.svg'
                  alt='img'
                  width={16}
                  height={16}
                />
                96%
              </div>
              <div className='text-[#969696] text-[12px] hidden md:inline-block'>
                Tomatometer
              </div>
            </li>
            <li className='flex flex-col items-center px-2 md:px-5 relative md:before:h-[24px] md:before:w-[1px] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-0 md:before:bg-[#e8e8e8] md:first-of-type:before:content-none before:opacity-0 md:before:opacity-100'>
              <div className='flex items-center gap-1 text-sm'>
                <span>PG</span>
              </div>
              <div className='text-[#969696] text-[12px] hidden md:inline-block'>
                Rating
              </div>
            </li>
            <li className='flex flex-col items-center px-2 md:px-5 relative md:before:h/[24px] md:before:w/[1px] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-0 md:before:bg-[#e8e8e8] md:first-of-type:before:content-none before:opacity-0 md:before:opacity-100'>
              <div className='flex items-center gap-1'>
                <BiHomeHeart size={24} />
              </div>
              <div className='text-[#969696] text-[12px] hidden md:inline-block'>
                Chinese
              </div>
            </li>
            <li className='flex flex-col items-center pl-2 md:pl-5 relative md:before:h/[24px] md:before:w/[1px] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-0 md:before:bg-[#e8e8e8] md:first-of-type:before:content-none before:opacity-0 md:before:opacity-100'>
              <div className='flex items-center gap-1 text-sm'>99 Minutes</div>
              <div className='text-[#969696] text-[12px] hidden md:inline-block'>
                Duration
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className='para mt-4 mb-2 w-full sm:w-[60%]'>
        {isReadMore ? (
          <>
            {description.substring(0, 220)}...
            <span
              onClick={toggleReadMore}
              className='cursor-pointer text-blue-500 pl-1 hover:underline'
            >
              Read more
            </span>
          </>
        ) : (
          <>
            {description}
            <span
              onClick={toggleReadMore}
              className='cursor-pointer text-blue-500 pl-1 hover:underline'
            >
              Read less
            </span>
          </>
        )}
      </p>

      <div className='flex gap-4 text-sm text-[#8d8d8d] cursor-pointer'>
        <Link href='#' className='border-b hover:text-white'>
          Romance
        </Link>
        <ul className='list-disc ml-3'>
          <li className='border-b'>
            <Link href='#' className='hover:text-white'>
              Drama
            </Link>
          </li>
        </ul>
      </div>
      <ul className='mt-4 flex flex-col gap-2 text-sm'>
        <li>
          <Link href='#'>
            <strong>Directors</strong>
            <span className='hover:text-[#8d8d8d] pl-2'> Wong Kar-wai</span>
          </Link>
        </li>
        <li className='flex'>
          <strong>Cast </strong>
          <Link
            href='#'
            className='hover:text-[#8d8d8d] flex items-center gap-2 text-sm whitespace-nowrap text-text-default after:w-1 after:bg-[#999] after:rounded-full after:inline-block after:aspect-square last-of-type:after:content-none hover:text-text-dark pl-2'
          >
            Maggie Cheung Man-Yuk
          </Link>

          <Link
            href='#'
            className='hover:text-[#8d8d8d] flex items-center gap-2 text-sm whitespace-nowrap text-text-default after:w-1 after:bg-[#999] after:rounded-full after:inline-block after:aspect-square last-of-type:after:content-none pl-2'
          >
            Tony Leung Chiu-wai
          </Link>
        </li>
      </ul>
      <div className='flex gap-[6px] flex-wrap mt-5'>
        <MovieTags text='Neighbor' />
        <MovieTags text='Romantic Drama' />
        <MovieTags text='Neighbor Neighbor Relationship' />
        <MovieTags text='Extramarital Affair' />
        <MovieTags text='Secret Love' />
        <MovieTags text='Forbidden Love' />
      </div>
      <div className='mt-6 flex items-center gap-5 flex-wrap mb-1 text-white'>
        <Link
          href='#'
          className='gap-[10px] min-h-[42px] flex items-center justify-center border-dotted border-2 pl-[6px] pr-[10px] border-[#969696] text-[#969696] rounded-[10px] text-[15px] font-bold hover:border-white hover:text-white'
        >
          <PlayCircle size={20} />
          Watch Trailer
        </Link>
        <Link
          href='#'
          className='gap-[10px] min-h-[42px] flex items-center justify-center border-dotted border-2 pl-[6px] pr-[10px] border-[#969696] text-[#969696] rounded-[10px] text-[15px] font-bold hover:border-white hover:text-white'
        >
          <BiSolidMovie size={20} />
          Where to Watch
        </Link>
        <Link
          href='#'
          className='gap-[10px] min-h-[42px] flex items-center justify-center border-dotted border-2 p-[6px] border-[#969696] text-[#969696] rounded-[10px] text-[15px] font-bold hover:border-white hover:text-white'
        >
          <Bookmark size={24} />
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
