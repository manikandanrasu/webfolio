import React from 'react';
import ContactCard from '../components/ContactCard.jsx';
import { Social } from '../constants/index.js'

const Contact = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center pt-24 z-[10]'>
        <div className='max-w-[92%] flex flex-col justify-center items-center'>
            <div 
                className='text-4xl font-normal tracking-wider uppercase mb-8'
                style = {{
                    textShadow: '10px 12px 0 #ebcb9c'
                }}    
            >
                 Get in touch
            </div>
            <p className='text-center mb-4'>Got a project, idea, or question? Let&apos;s talk and make it happen.</p>
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