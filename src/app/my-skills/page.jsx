"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { SkillData } from '../constants';


const Skills = () => {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center text-center space-y-6'>
        <div
            className='text-5xl font-normal tracking-wider uppercase'
            style = {{
                textShadow: '10px 12px 0 #ebcb9c',
            }}
        >
            Skills & Technologies
        </div>
        <div className='relative min-w-[250px]'>
            <span className='relative text-xl font-normal tracking-wider z-[50]'>Powered by these Skills</span>
            <motion.div 
             className='absolute top-1/2 translate-y-1/2 z-[10]'
             style={{
                backgroundColor: "#d7a15d",
                height: "6px"
             }}
             initial={{ width: "0%"}}
             animate={{ width: ["0%", "100%"]}}
             transition={{
                delay: 0,
                duration: 1
             }}
            />
        </div>

        <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false
            }}
            speed={5000}
            modules={[Autoplay]}
            className='max-w-[80%]'
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={skill.Image}
                        alt={skill.name}
                        width={Number(skill.width)}
                        height={Number(skill.height)}
                    >
                    </Image>
                </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
            }}
            speed={5000}
            modules={[Autoplay]}
            className='max-w-[80%]'
        >
            {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={skill.Image}
                        alt={skill.name}
                        width={Number(skill.width)}
                        height={Number(skill.height)}
                    >
                    </Image>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  ); 
};

export default Skills;