import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center bg-gray-700 h-20 max-w-[1240px] mx-auto px-4 text-white'>
      <div className="inline-block p-2 bg-white rounded-lg">
        <img src="/favicon.ico" alt="Your Logo" className="w-13 h-8" />
      </div>

      <ul className='hidden md:flex'>
        <li className='cursor-pointer p-4'>
          <Link href="/">
            <>Home</>
          </Link>
        </li>
        <li className='cursor-pointer p-4'>
          <Link href="/login">
            <>Login</>
          </Link>
        </li>
        <li className='cursor-pointer p-4'>
          <Link href="/services">
            <>Services</>
          </Link>
        </li>
        <li className='cursor-pointer p-4'>
          <Link href="/about">
            <>About</>
          </Link>
        </li>
        <li className='cursor-pointer p-4'>
          <Link href="/contact">
            <>Contact</>
          </Link>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className="inline-block p-2 m-4 bg-white rounded-lg">
          <img src="/favicon.ico" alt="Your Logo" className="w-13 h-8" />
        </div>
        <li className='p-4 border-b border-gray-600'>
          <Link href="/">
            <>Home</>
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link href="/login">
            <>Login</>
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link href="/services">
            <>Services</>
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link href="/about">
            <>About</>
          </Link>
        </li>
        <li className='p-4'>
          <Link href="/contact">
            <>Contact</>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

