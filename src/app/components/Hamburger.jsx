import React from 'react'

const Hamburger = ({size = 40 }) => {

    const lineHeigth = size / 20;
    
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        <div
            style = {{
                width: size,
                height: lineHeigth
            }}
            className='bg-black rounded'
        ></div>
        <div
            style = {{
                width: size * 0.5,
                height: lineHeigth
            }}
            className='bg-black rounded'
        ></div>
    </div>
  )
}

export default Hamburger;