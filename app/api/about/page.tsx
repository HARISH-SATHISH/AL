import React from 'react'
import VideoBackground from '@/app/components/VideoBg'
import Aboutcard from '@/app/components/Aboutcard'

const page = () => {
  return (
    <div  className='text-white border border-white mx-[10%] px-2 py-4 mt-4 '>
     <VideoBackground/>
      <h1 className=' text-4xl '>Welcome to Astlog: Unveiling the Cosmos Together</h1>
      <Aboutcard heading='Our Mission' description="Astlog, short for Astronomy Log, is more than just a project—it's a community-driven initiative that invites enthusiasts of all ages and backgrounds to explore the wonders of the universe. Our mission is to foster a sense of curiosity, connection, and discovery through citizen science in the field of astronomy."/>
      <Aboutcard heading='What is Astlog?' description="Astlog—short for Astronomy Log. It's a platform where amateur astronomers, stargazers, and science enthusiasts unite to contribute valuable observations and data about celestial phenomena. Whether you're a seasoned astronomer or just starting your journey under the stars, Astlog provides a space for everyone to actively participate in the scientific exploration of our universe."/>
      <Aboutcard heading='Why Citizen Science Matters' description="We believe in the power of collective intelligence. By harnessing the collective observations of individuals around the globe, we can make significant contributions to our understanding of the cosmos. Citizen science allows us to bridge the gap between professional researchers and passionate amateurs, creating a symbiotic relationship that propels our knowledge of the universe forward."/>
    </div>
  )
}

export default page