import React from 'react'

const Error = () => {
  return (
    <div className="text-center py-40">
    <h2 className="text-3xl mb-2 text-[#062A55]">
     Oopss... The page doesn't exist. 
    </h2>
    <a href='/'>
    <p className='text-gray-500 underline hover:text-[#062A55]'>proceed to waitlist</p>
    </a>
  </div>
  )
}

export default Error