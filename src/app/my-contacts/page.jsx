import React from 'react';
import ContactCard from '../components/ContactCard.jsx';
import { Social } from '../constants/index.js'

const Contact = () => {
  return (
    <div className='relative h-screen flex flex-col justify-center items-center z-[10]'>
        <div className='flex flex-col justify-center items-center mx-4'>
            <div 
                className='text-4xl md:text-7xl font-normal tracking-wider uppercase mb-8'
                style = {{
                    textShadow: '10px 12px 0 #ebcb9c'
                }}    
            >
                 Get in touch
            </div>
            <p className='text-center text-[#4a4a4a] mb-4'>Got a project, idea, or question? Let&apos;s talk and make it happen.</p>
            <div className='w-full flex flex-col gap-4'>
                {Social.map((social, index) => (
                    <ContactCard 
                        key={index}
                        name={social.name}
                        text={social.text}
                        src={social.image}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Contact;