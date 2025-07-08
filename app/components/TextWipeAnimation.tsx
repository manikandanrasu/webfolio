"use client";
import React, { useEffect, useState, useRef } from "react";

const TextWipeAnimation = () => {
  const [reverse, setReverse] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      setBoxWidth(width + 80);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 3500); // 2.5s loop
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block overflow-hidden px-2">
      {/* Text */}
      <h1
        ref={textRef}
        className="text-sm font-[montserrat] font-normal tracking-widest text-gray-800 relative z-10"
      >
        BACKEND DEVELOPER
      </h1>

      {/* Black Block Animation */}
      <div
        className="absolute top-0 left-[-40px] h-full bg-black z-20 transition-transform duration-2500 ease-in-out"
        style={{
          width: `${boxWidth}px`,
          transform: reverse ? `translateX(0%)` : `translateX(-100%)`,
        }}
      />
    </div>
  );
};

export default TextWipeAnimation;