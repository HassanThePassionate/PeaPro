import Link from "next/link";

interface MovieTagsProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const MovieTags = ({ text, onClick, className }: MovieTagsProps) => {
  return (
    <div
      onClick={onClick}
      className={` ${className}  px-4 flex items-center justify-center  min-h-[30px] border border-[#e6e6e6]   text-[#999] dark:text-white dark:bg-[#555] rounded-[26px] cursor-pointer text-sm hover:bg-[#fff] hover:text-black`}
    >
      {text}
    </div>
  );
};

export default MovieTags;
