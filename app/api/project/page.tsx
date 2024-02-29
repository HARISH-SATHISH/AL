import Logcard from '@/app/components/Logcard'
import VideoBackground from '@/app/components/VideoBg'
import Projectcard from '@/app/components/projectcard'
import Link from 'next/link'
import React from 'react'
import { GiFallingStar } from 'react-icons/gi'


const page = () => {
 
  return (
    <div>
    <VideoBackground />
    <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 '>
    <h1 className=' text-5xl bg-white text-black p-2 inline-block '>Projects</h1>
     <span className='ml-10 p-1 border border-white'><button ><Link href='./project/modlogin'>mod</Link></button></span>
      <div className=' mt-1 overflow-y-scroll py-2 scrollbar'>
      <Projectcard/>
      </div>
      
    </div>
  </div>
  )
}

export default page