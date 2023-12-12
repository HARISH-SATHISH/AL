import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import Blogcard from '@/app/components/Blogcard'
import '../../../app/globals.css'

const page = () => {
  return (
    <div>
      <VideoBackground />
      <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 overflow-y-scroll scrollbar'>
      <h1 className=' text-5xl bg-white text-black p-2 inline-block '>BLOGS!!</h1>
        {/* blog input section start */}
        <div className=' grid grid-cols-12 border border-white p-2 mt-4'>
          <div className=' col-span-1'> avatar</div>
          <div className=' col-span-11'>
            <h1 className=' text-3xl'><input type="text" placeholder='Title' className=' bg-transparent border border-white p-1 w-full'/></h1>
            <p className=' mt-2'><textarea  cols={37} rows={5} placeholder='description' className=' bg-transparent border border-white p-1 w-full'></textarea></p>
            <button className=' mt-2 border border-white p-1  hover:bg-white hover:text-black'>post</button>
          </div>
        </div>
        {/* blog input section end*/}

        <Blogcard />
      </div>
    </div>
  )
}

export default page