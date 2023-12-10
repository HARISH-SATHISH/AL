import React from 'react'

const Homecon = () => {
  return (
    <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7'>
      <h1 className=' text-5xl bg-white text-black p-2 inline-block'> welcome to AstLog!!!</h1>
      <p className='mt-4'>
        Astronomy Log is a citizen science initiative inviting astronomy enthusiasts to contribute
        valuable observational data. Join Astronomy Log to be part of a global community dedicated to
        exploring and contributing to the wonders of the cosmos.
      </p>
      <button className=' p-2 mt-4 border border-white hover:bg-white hover:text-black '>Join_Now</button>
      <p className=' text-xs mt-1'>Login if you have already joined!</p>
    </div>
  )
}

export default Homecon