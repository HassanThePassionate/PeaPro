import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-1'>
      <svg
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='18'
          cy='18'
          r='11.3049'
          stroke='#9ECC3E'
          strokeWidth='6.36585'
        ></circle>
        <mask id='path-2-inside-1_436_4320' fill='white'>
          <path d='M25.0329 5.33373C26.8032 6.31667 28.3478 7.65979 29.567 9.27643C30.7863 10.8931 31.6531 12.7473 32.1115 14.7196L18 18L25.0329 5.33373Z'></path>
        </mask>
      </svg>
      <span className='font-semibold text-normal text-[#999]'>
        pea <span className='text-green-500'>PRO</span>
      </span>
    </Link>
  );
};

export default Logo;
