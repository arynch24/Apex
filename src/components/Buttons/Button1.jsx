import React from 'react'

const Button1 = ({name}) => {
  return (
    <div className='w-44 h-16 flex items-center justify-center bg-gradient-to-r from-[#C1FF5B] to-[#73C4F4] border-0 rounded-[50px] transition ease-in duration-300 hover:font-bold'>
      {name}
    </div>
  )
}

export default Button1
