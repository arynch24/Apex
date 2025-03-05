import React from 'react'

const Button2 = ({ name }) => {
    return (
        <div className='inline-flex h-9 px-4 py-2 items-center justify-center text-white bg-[#81B8D9] border-0 rounded-[10px] transition ease-in duration-300 hover:font-bold'>
            {name}
        </div>
    )
}

export default Button2
