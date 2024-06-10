import { PlayCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const data = [
  {
    title: "FreeOK",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Mahua Videos",
    img: "https://p1.meituan.net/dpplatform/300fbce8169b2690f867bd9cdbf0e25650508.png",
  },
  {
    title: "56 Cinema",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Rice Planet",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "555 Movie",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "168 Cinema",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Watermelon Videos",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Lizard Cinema",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Puppy Cinema",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Kingman Films",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "City Movies",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Rice Planet",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Rice Planet",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Rice Planet",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
  {
    title: "Rice Planet",
    img: "https://p1.meituan.net/dpplatform/8482efd8906a49120eeccb26ff73ad0a10645.png",
  },
];
const MovieTabs = () => {
  return (
    <div className='mt-[30px] max-w-[1240px] w-full mx-auto px-4'>
      <h3 className='flex items-center gap-3 text-[20px] my-6'>
        <PlayCircle color='green' />
        Play online
      </h3>
      <div className='grid grid-cols-4 gap-3 mb-4'>
        {data.map((e) => {
          return (
            <div className='flex items-center justify-between rounded-[12px] hover:shadow-xl transition duration-300 h-[80px] cursor-pointer gap-4 p-4 bg-white'>
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
                <div className='border-l  pl-2'>
                  <PlayCircle color='#888' size={32} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieTabs;
