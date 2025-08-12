"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero1 = () => {
  const skillList = ["Backend developer", "Frontend developer", "MERN stack developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skillList.length);
    }, 4000);
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center">
      <div className='flex flex-col text-center mx-auto space-y-4'>
        <div 
          className='text-6xl md:text-8xl font-normal tracking-wider uppercase'
          style = {{
            textShadow: '10px 12px 0 #ebcb9c',
          }}
        >
          hi ther
        </div>
        <div 
          className='text-7xl md:text-8xl font-normal tracking-wider uppercase'
          style = {{
            textShadow: '10px 12px 0 #ebcb9c',
          }}
        >
          i&apos;m mani
        </div>
        <div className='relative w-full h-5'>
          <span className='flex justify-center items-center text-sm font-normal tracking-[6px] uppercase'>{skillList[index]}</span>
          <motion.div
            className='absolute top-1/2 -translate-y-1/2'
            style = {{
              backgroundColor: 'black',
              height: "100%"
            }}
            inital={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;