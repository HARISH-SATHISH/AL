import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import '../../../app/globals.css'
import Logcard from '@/app/components/Logcard'
import { GiFallingStar } from 'react-icons/gi'

const page = () => {
    return (
        <div>
            <VideoBackground />
            <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-[2%] h-full  '>
             <h1 className=' text-5xl bg-white text-black p-2 inline-block'>LOGS!!</h1>
             <div className=' mt-4 overflow-y-scroll py-2 scrollbar'><Logcard/></div>
             <div className='py-2'><button className=' border border-white p-1 flex  hover:bg-white hover:text-black '>create_a_log <span className='p-1 text-1xl'><GiFallingStar/></span></button></div>
            </div>
        </div>
    )
}

export default page