import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import Blogcard from '@/app/components/Blogcard'
import '../../../app/globals.css'

const page = () => {
  return (
    <div>
        <VideoBackground/>
        <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 overflow-y-scroll scrollbar'>
         <Blogcard/>
        </div>
    </div>
  )
}

export default page