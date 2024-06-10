// For TypeScript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Tabs from "./Tab";

type DataType = {
  title: string;
  styles?: {
    bg?: string;
    color?: string;
  };
};

const data: DataType[] = [
  {
    title: "The eighth suspect",
    styles: {
      bg: "#F2F5FF",
      color: "#78C14B",
    },
  },
  {
    title: "Investiture of the Gods Part 1: Chaoge Storm",
    styles: {
      bg: "#F2F5FF",
      color: "#78C14B",
    },
  },
  {
    title: "All or Nothing 2023",
    styles: {
      bg: "#F2F5FF",
      color: "#78C14B",
    },
  },
  {
    title: "Travel with Phoenix",
  },
  {
    title: "The annual meeting cannot stop!",
  },
  {
    title: "Hot and Spicy",
  },
  {
    title: "Article 20",
  },
  {
    title: "Speed Life 2",
  },
  {
    title: "Kung Fu Panda 4",
  },
  {
    title: "Queen of Tears",
  },
];

const Suggestion: React.FC = () => {
  return (
    <div>
      <Card className='py-[36px] px-[21px] w-[378px] absolute z-10 mt-2 flex gap-4 flex-col dark:bg-[#0A0E1A]'>
        <CardHeader className='p-0'>
          <CardTitle className='text-[16px] text-[#8A8A8A]'>
            Everyone is Searching
          </CardTitle>
        </CardHeader>
        <CardContent className='flex p-0  gap-y-[12px] gap-x-2 flex-wrap justify-start'>
          {data.map((e, index) => (
            <Tabs
              key={index}
              title={e.title}
              background={e.styles?.bg}
              color={e.styles?.color}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Suggestion;
