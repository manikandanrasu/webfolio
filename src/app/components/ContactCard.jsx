import React from 'react'

const ContactCard = ({name, text, src }) => {
  return (
    <div className='flex rounded-lg space-x-4 p-4 border border-[#fefadf]/20 bg-white/10 shadow-md backdrop-filter backdrop-blur-md'>

      <div className='flex rounded-full bg-white/40 p-2 my-auto'>
        <img src={src} alt={name}
            className='w-6 h-6'
        />
      </div>
      <div className='flex flex-col'>
          <span className='font-bold'>{name}</span>
          <span>{text}</span>
      </div>
    </div>
  )
}

export default ContactCard;