import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
const Homecon = () => {
  return (
    <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7'>
      <h1 className=' text-5xl bg-white text-black p-2 inline-block'> welcome to AstLog!!!</h1>
      <p className='mt-4'>
        Astronomy Log is a citizen science initiative inviting astronomy enthusiasts to contribute
        valuable observational data. Join Astronomy Log to be part of a global community dedicated to
        exploring and contributing to the wonders of the cosmos.
      </p>
      <button onClick={()=>signIn("google")} className=' p-2 mt-4 border border-white hover:bg-white hover:text-black ' ><span className='text-2xl'><FcGoogle /></span>auth</button>
      <p className=' text-xs mt-1'>login here using google auth</p>
    </div>
  )
}

export default Homecon