"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        {/* Media layer */}
        <div className="flex flex-col justify-center items-center gap-4 mt-8 md:mt-8 md:hidden">
          <div className="relative inline-block mb-4">
            {/* Back layer */}
            <h1 className="text-5xl md:text-6xl font-[montserrat] text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px]  pointer-events-none">
              SKILLS &
            </h1>

            {/* Front layer */}
            <h1 className="text-5xl md:text-6xl font-[montserrat] text-normal text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
              SKILLS &
            </h1>
          </div>

          <div className="relative inline-block mb-4">
            {/* Back layer */}
            <h1 className="text-5xl md:text-6xl font-[montserrat] text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px]  pointer-events-none">
              TECHNOLOGIES
            </h1>

            {/* Front layer */}
            <h1 className="text-5xl md:text-6xl font-[montserrat] text-normal text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
              TECHNOLOGIES
            </h1>
          </div>

          <div className="inline-flex relative mb-2">
            <span className="absolute left-0 bottom-[8px] w-full h-[6px] bg-[#d7a15d] z-0"></span>
            <h2 className="relative text-xl font-[montserrat] font-medium tracking-wider z-10">Powered by these skills</h2>
          </div>
        </div>

        {/* Desktop layer */}
        <div className="flex flex-col justify-center items-center gap-4 mt-8 md:mt-8 sm:hidden md:block">
          <div className="relative inline-block mb-4">
            {/* Back layer */}
            <h1 className="text-7xl font-[montserrat] text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px]  pointer-events-none">
              SKILLS & TECHNOLOGIES
            </h1>

            {/* Front layer */}
            <h1 className="text-7xl font-[montserrat] text-normal text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
              SKILLS & TECHNOLOGIES
            </h1>
          </div>

          <div className="inline-flex relative mb-2">
            <span className="absolute left-0 bottom-[8px] w-full h-[6px] bg-[#d7a15d] z-0"></span>
            <h2 className="relative text-2xl font-[montserrat] font-medium tracking-wider z-10">Powered by these skills</h2>
          </div>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={Number(skill.width)}
                height={Number(skill.height)}
              />
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
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={Number(skill.width)}
                height={Number(skill.height)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
