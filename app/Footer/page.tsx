import React from 'react'
import { navItems } from '../Component/Data'

const Footer = () => {
  return (
    <div className='py-[2rem]'>
      <div className=' text-text grid grid-cols-1 gap-[14px] place-items-center sm:flex sm:items-center sm:justify-evenly
      hover:cursor-pointer'>
        {navItems.map((items)=>(
          <div>
            {items.text}
          </div>
        ))}
      </div>
      <div className='text-secondary text-[10px] text-center mt-[20px] sm:mt-[40px] sm:text-[14px]'>
     Designed & Built by Rojit Dhakal
      </div>
    </div>
  )
}

export default Footer
