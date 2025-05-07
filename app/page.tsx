"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="justify-center pl-13 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-sm md:max-w-[750px]">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold ">
            Hi I'm Mani.
            <span className="block text-[20px] md:text-[50] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Backend Developer
            </span>
          </h1>
          <p className="text-white dark:text-white">
            I specialize in building efficient and secure backend systems using up-to-date
            technologies. My work involves creating APIs, structuring databases, and optimizing
            server-side logic. Currently exploring machine learning to bring smart capabilities to
            backend systems. 
          </p>
          <div className="flex-row md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute justify-center item-center gap-x-4 flex bottom-10 z-[20] right-5 flex-row md:hidden mt-2 mb-[70%] mr-17">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hidden"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}
