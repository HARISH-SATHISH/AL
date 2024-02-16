import Logcard from '@/app/components/Logcard'
import VideoBackground from '@/app/components/VideoBg'
import Link from 'next/link'
import React from 'react'
import { GiFallingStar } from 'react-icons/gi'

const page = () => {
  return (
    <div>
    <VideoBackground />
    <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-[2%] h-full  '>
     <h1 className=' text-5xl bg-white text-black p-2 inline-block'>project!!</h1>
     <div className=' mt-4 overflow-y-scroll py-2 scrollbar'><Logcard/></div>
     <div className='py-2'><button className=' border border-white p-1  hover:bg-white hover:text-black '><Link href='./logs/logform' className='flex'>create_a_log <span className='p-1 text-1xl'><GiFallingStar/></span></Link></button></div>
    </div>
</div>
  )
}

export default page