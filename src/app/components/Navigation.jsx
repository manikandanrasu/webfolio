import React from 'react';
import Link from 'next/link';
import { NavLinks } from '../constants/index.js';

const Navigation = () => {
  return (
    <div className='fixed bottom-2 w-full flex justify-center z-[50]'>
        <div className='flex max-w-[300px] h-16 items-center justify-center bg-[#1d2122]/15 backdrop-blur-md p-2 rounded-full'>
          <div className="flex flex-row items-center justify-center gap-4">
            {NavLinks.map((item) => (
              <Link key={item.name} href={item.link} className="flex h-12 w-12 justify-center items-center rounded-full border border-[#2a2e2f]/20 bg-[#2a2e2f] text-[#70767a]">
                <item.icon className="w-[24px] h-[24px]"/>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Navigation;