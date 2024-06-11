import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { ElementType } from "react";
interface HeadingProps {
  title: string;
  icon: ElementType;
  read: string;
}
const Heading = ({ title, icon: Icon, read }: HeadingProps) => {
  return (
    <div className='mb-6 mt-10'>
      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-3'>
          <Icon size={24} />
          <h3 className='text-[20px]'>{title}</h3>
        </div>
        {read && (
          <Badge className='flex items-center bg-white text-black hover:bg-white cursor-pointer gap-1'>
            <span>More</span>
            <ChevronRight size={16} />
          </Badge>
        )}
      </div>
    </div>
  );
};

export default Heading;
