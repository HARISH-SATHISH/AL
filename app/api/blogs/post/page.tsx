import VideoBackground from '@/app/components/VideoBg'
import React from 'react'

const page = () => {
  return (
    <div>
      <VideoBackground />
    <div className=' grid grid-cols-12 border border-white p-2 mt-4 mx-[10%] text-white '>
    <div className=' col-span-1'> avatar</div>
    <div className=' col-span-11'>
      <h1 className=' text-3xl'><input type="text" placeholder='Title' className=' bg-transparent border border-white p-1 w-full'/></h1>
      <p className=' mt-2'><textarea  cols={37} rows={5} placeholder='description' className=' bg-transparent border border-white p-1 w-full'></textarea></p>
      <button className=' mt-2 border border-white p-1  hover:bg-white hover:text-black'>post</button>
    </div>
  </div>
    </div>
  )
}

export default page