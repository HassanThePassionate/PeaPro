interface MovieTagsProps {
  text: string;
}

const MovieTags = ({ text }: MovieTagsProps) => {
  return (
    <div
      className={`px-4 py-1 bg-[#fff] dark:bg-[#555] rounded-full cursor-pointer text-sm`}
    >
      {text}
    </div>
  );
};

export default MovieTags;
