import { title } from "process";

interface TabsProps {
  title: string;
  background?: string;
  color?: string;
}
const Tabs = ({ title, background, color }: TabsProps) => {
  return (
    <div>
      <div
        className={`px-4 py-2 ${
          background ? "bg-[#F2F5FF]" : "bg-[#f5f5f5] dark:bg-[#555]"
        } ${color ? "text-[#78C14B]" : ""} rounded-full cursor-pointer text-sm`}
      >
        {title}
      </div>
    </div>
  );
};

export default Tabs;
