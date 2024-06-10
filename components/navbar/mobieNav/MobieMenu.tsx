import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/constant/menuData";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div>
      <Card className='py-[36px] px-[21px] w-[300px] flex gap-4 flex-col dark:bg-[#0A0E1A]'>
        <CardContent>
          <ul className='flex items-center flex-col gap-8'>
            {data.map((item, index) => (
              <li key={index}>
                <Link
                  href='#'
                  className='flex items-center gap-2  hover:underline'
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            <Button>Submit</Button>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileMenu;
