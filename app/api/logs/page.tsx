import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import '../../../app/globals.css'

const page = () => {
    return (
        <div>
            <VideoBackground />
            <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-[2%] h-full overflow-y-scroll scrollbar '>
             <h1 className=' text-5xl bg-white text-black p-2 inline-block'>LOGS!!</h1>
            </div>
        </div>
    )
}

export default page