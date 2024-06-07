import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { ElementType } from "react";
interface HeadingProps {
  title: string;
  icon: ElementType;
}
const Heading = ({ title, icon: Icon }: HeadingProps) => {
  return (
    <div className='mb-6 mt-10'>
      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-2'>
          <Icon size={24} />
          <h3 className='text-[20px]'>{title}</h3>
        </div>
        <Badge className='flex items-center gap-1'>
          <span>More</span>
          <ChevronRight size={16} />
        </Badge>
      </div>
    </div>
  );
};

export default Heading;
