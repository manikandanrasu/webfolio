import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx'
import { Projects } from '../constants/index.js';


const Project = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center pt-24 z-[10]'>
        <div className='max-w-[92%] flex flex-col justify-center items-center'>
          <div
            className='text-4xl font-normal tracking-wider uppercase mb-4'
            style = {{
              textShadow: '10px 12px 0 #ebcb9c',
            }}
          >
            My Work
          </div>
          <span className='text-pretty font-extrabold mb-2'>A showcase of my projects and creations</span>
          <p className='text-center mb-2'>I create work that turns heads and gets results. If you&apos;re after something unique and built with care, you&apos;ll feel at home here.</p>

          <div className='grid md:grid-cols-3 gap-8 mt-8 mx-4'>
            {Projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                text={project.text}
                src={project.src}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Project;
