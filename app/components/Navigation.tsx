"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const prevPathRef = useRef(path); 

  useEffect(() => {
    if (prevPathRef.current !== path) {
      setisRouting(true);
      prevPathRef.current = path; 
    }
  }, [path]); 

  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-[64px] bg-[#fefadf] z-[40]">
        <div
          style={{ left: "25%" }}
          className="fixed z-[50] -bottom-20 w-[50%] md:w-[40%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
        >
          {isRouting && <Transition />}
          {NavLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
              <nav.icon
                className={`w-[24px] h-[24px] ${
                  path === nav.name ? "text-purple-800" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div> 
    
  );
};

export default Navigation;