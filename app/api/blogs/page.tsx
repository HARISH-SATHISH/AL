import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import Blogcard from '@/app/components/Blogcard'
import '../../../app/globals.css'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <VideoBackground />
      <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 '>
      <h1 className=' text-5xl bg-white text-black p-2 inline-block '>BLOGS!!</h1>
       
        <div className=' mt-1 overflow-y-scroll py-2 scrollbar'>
        <Blogcard />
        </div>
        <div className='py-2'><button className=' border border-white p-1  hover:bg-white hover:text-black '><Link href='./blogs/post'>create_a_post</Link></button></div>
      </div>
    </div>
  )
}

export default page