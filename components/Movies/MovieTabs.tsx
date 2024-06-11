"use client";
import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import MovieTags from "./MovieTags";
import Link from "next/link";

interface Episode {
  title: string;
  img: string;
}

interface SeasonsData {
  [key: string]: Episode[];
}

const seasonsData: SeasonsData = {
  season1: [
    {
      title: "Episode 1",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 2",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
  season2: [
    {
      title: "Episode 3",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 4",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
  season3: [
    {
      title: "Episode 5",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 6",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
  season4: [
    {
      title: "Episode 7",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 8",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
  season5: [
    {
      title: "Episode 9",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 10",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
  season6: [
    {
      title: "Episode 11",
      img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
    },
    {
      title: "Episode 12",
      img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
    },
  ],
};

const MovieTabs: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<string>("season1");
  const [data, setData] = useState<Episode[]>(seasonsData.season1);

  const handleTabClick = (season: string) => {
    setActiveSeason(season);
    setData(seasonsData[season]);
  };

  return (
    <div className='mt-[30px] max-w-[1425px] w-full mx-auto px-4'>
      <div className='flex items-center gap-2 mb-4 flex-wrap'>
        {Object.keys(seasonsData).map((season, index) => (
          <MovieTags
            key={index}
            text={`Season ${index + 1}`}
            onClick={() => handleTabClick(season)}
            className={activeSeason === season ? "bg-white" : "bg-[#E6E6E6]"}
          />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4'>
        {data.map((e, i) => (
          <Link
            href='#'
            key={i}
            className='flex items-center justify-between rounded-[12px] hover:shadow-xl transition duration-300 h-[80px] cursor-pointer gap-4 p-4 bg-white'
          >
            <div className='flex items-center gap-6'>
              <Image
                src={e.img}
                alt='img'
                height={28}
                width={68}
                className='h-[48px] w-[48px]'
              />
              <div>
                <h4>{e.title}</h4>
                <div className='flex items-center flex-wrap gap-2 mt-1'>
                  <div className='px-2 bg-[#E6EDFF] text-[#3A6AFA] text-[12px]'>
                    normal
                  </div>
                  <span className='text-[12px] text-[#888]'>11420 views</span>
                </div>
              </div>
            </div>
            <div>
              <div className='border-l pl-2'>
                <PlayCircle color='#888' size={32} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieTabs;
