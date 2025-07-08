"use client";

import React, { useEffect, useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[100px] flex justify-between items-center px-10 md:px-20 transition-all duration-300 bg[#fefadf]/60 backdrop-blur">
      <div className="text-black text-normal font-[montserrat] font-medium tracking-wider">mani.codes</div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;