import React from 'react';

const Project = ({title, text, src}) => {
  return (
    <div 
      className='flex flex-col shadow-md rounded-lg'
    >
      <img src={src} alt={title} className='w-full h-52 object-cover rounded-t-md' />
      <div className='m-4'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-base'>{text}</p>
      </div>
    </div>
  );
};

export default Project;