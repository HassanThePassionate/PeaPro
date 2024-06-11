import Heading from "@/components/Heading";
import Movie from "@/components/Movie";
import Movies from "@/components/Movies/Movies";
import Navbar from "@/components/navbar/Navbar";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='mt-[50px] max-w-[1240px] w-full mx-auto px-4'>
        <Movies read='read' />
        <div>
          <Heading title='TV Series' icon={BiMoviePlay} read='read' />
          <Movie />
        </div>
        <div>
          <Heading title='Netflix' icon={BiCameraMovie} read='read' />
          <Movie />
        </div>
        <div>
          <Heading title='Classic Online' icon={BiCameraMovie} read='read' />
          <Movie />
        </div>
        <div className='mb-10'>
          <Heading title='My Youth' icon={BiCameraMovie} read='read' />
          <Movie />
        </div>
      </div>
    </>
  );
}
