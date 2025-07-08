"use client"

import TextWipeAnimation from "./components/TextWipeAnimation";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-[60px]">
      
      {/* Section: Hero */}
      <section className="min-h-screen pt-20 relative flex flex-col font-[montserrat] items-center justify-center">

        <div className="relative inline-block mb-6">
          {/* Back layer */}
          <h1 className="md:text-8xl text-6xl text-normal whitespace-nowrap text-[#ebcb9c] tracking-wider text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px] pointer-events-none">
            HELLOO
          </h1>

          {/* Front layer */}
          <h1 className="md:text-8xl text-6xl text-normal text-black whitespace-nowrap tracking-wider text-[clamp(2.8rem, 8vw, 5rem)] relative">
            HELLOO
          </h1>
        </div>

        <div className="relative inline-block mb-6">
          {/* Back layer */}
          <h1 className="md:text-9xl text-7xl text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px] pointer-events-none">
            I&apos;M MANI
          </h1>

          {/* Front layer */}
          <h1 className="md:text-9xl text-7xl text-normal  text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
            I&apos;M MANI
          </h1>
        </div>

        <TextWipeAnimation />

        {/* Scroll indicator */}
        <div>
          
        </div>
      </section>

      {/* Section: Who am i */}
      <section className="flex flex-col justify-center items-center mb-16 px-4 sm:px-8 md:px-18">
        <div className="relative inline-block mb-8">
          {/* Back layer */}
          <h1 className="text-5xl md:text-7xl font-[montserrat] text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px]  pointer-events-none">
            WHO AM I
          </h1>

          {/* Front layer */}
          <h1 className="text-5xl md:text-7xl font-[montserrat] text-normal text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
            WHO AM I
          </h1>
        </div>

        <div className="flex w-full font-[montserrat] items-center px-[10%] mb-8">
          <p className="text-sm md:text-xl leading-relaxed text-center text-gray-800">
            Hello, I&apos;m Mani, a passionate Python backend developer with a strong focus on building scalable, secure, and efficient
            server-side applications. If you&apos;re looking for a impactful backend solution, feel free to email me. if we are a good fit, 
            i&apos;ll provide a time and cost estimate for your project.
          </p>
        </div>

        <button className="relative px-6 py-2 text-lg font-normal font-[montserrat] text-[#ebcb9c] bg-black group">
          <span className="absolute inset-0 w-full h-full border border-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out"></span>
          <span className="relative text-[#ebcb9c]">Resume</span>
        </button>
      </section>
      
      {/* Section: What i do */}
      <section className="flex flex-col justify-center items-center mb-8 px-4 sm:px-8 md:px-18">
        <div className="relative inline-block mb-8">
          {/* Back layer */}
          <h1 className="text-6xl md:text-8xl font-[montserrat] text-normal whitespace-nowrap text-[#ebcb9c] tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] /* responsive size */ text-faded select-none absolute top-[10px] left-[12px] pointer-events-none">
            WHAT I DO
          </h1>

          {/* Front layer */}
          <h1 className="text-6xl md:text-8xl px-4 font-[montserrat] text-normal text-black whitespace-nowrap tracking-wide text-[clamp(2.8rem, 8vw, 5rem)] relative">
            WHAT I DO
          </h1>
        </div>

        <div className="inline-flex relative mb-8">
          <span className="absolute left-0 bottom-[8px] w-full h-[6px] bg-[#d7a15d] z-0"></span>
          <h2 className="relative text-2xl font-[montserrat] font-medium tracking-wider z-10">API Development</h2>
        </div>

        <div className="flex w-full font-[montserrat] items-center px-[10%] mb-8">
          <p className="text-sm md:text-xl leading-relaxed text-center text-gray-800">
            I build RESTful APIs usinf FLASK and Django, enabling smooth communication between frontend and backend.
            My focus is on writing clean, scalable and secure endpoints for different application needs.
          </p>
        </div>

        <div className="inline-flex relative mb-8">
          <span className="absolute left-0 bottom-[8px] w-full h-[6px] bg-[#d7a15d] z-0"></span>
          <h2 className="relative text-xl font-[montserrat] font-normal tracking-wider z-10">Database Management</h2>
        </div>

        <div className="flex w-full font-[montserrat] items-center px-[10%] mb-8">
          <p className="text-sm md:text-xl leading-relaxed text-center text-gray-800">
            I work with both SQL (postgreSQL, MYSQL) and NoSQL(MongoDB) databases, designing schemas, handling queries, endpoints and
            ensuring efficient data storage and retrievel. I also use REDIS for caching and session management.
          </p>
        </div>
      </section>
    </main>
  );
}

