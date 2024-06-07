import Link from "next/link";
import data from "@/constant/menuData";
const MenuList = () => {
  return (
    <div>
      <ul className='flex items-center gap-8'>
        {data.map((item, index) => (
          <li key={index}>
            <Link href='#' className='flex items-center gap-2  hover:underline'>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
