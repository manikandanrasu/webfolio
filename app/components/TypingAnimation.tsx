"use client";
import React, { useEffect, useState } from "react";

const TypingAnimation = () => {
  const fullText = "BACKEND DEVELOPER";
  const [displayText, setDisplayText] = useState("");
  const [reverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === fullText.length) setReverse(true);
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) setReverse(false);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index, reverse]);

  return (
    <p className="text-2xl font-[montserrat] text-gray-800 text-normal">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingAnimation;