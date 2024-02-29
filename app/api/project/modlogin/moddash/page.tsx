

import VideoBackground from '@/app/components/VideoBg'
import { graphQLClient } from '@/clients/api'
import { getAllBlogs } from '@/graphql/query/blog'
import { getAllLogs } from '@/graphql/query/log'
import { getAllProject } from '@/graphql/query/project'
import { getAllUser } from '@/graphql/query/user'
import React, { useDeferredValue, useEffect, useState } from 'react'

const page = async () => {




const blog=await graphQLClient.request(getAllBlogs)
const log=await graphQLClient.request(getAllLogs)
const user=await graphQLClient.request(getAllUser)
const pro=await graphQLClient.request(getAllProject)        

    


  
 


  return (
    <>
    <VideoBackground />
    <div className='text-white border border-white mx-[10%] px-2 py-4 mt-7'>
    <section className="text-white body-font">
    <h1 className='text-5xl bg-white text-black p-2 inline-block'> Site Activities</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4 sm:w-1/4 w-1/2 text-center">
        <h2 className="title-font font-medium sm:text-4xl text-3xl">{user.getAllUser?.length}</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2 text-center">
        <h2 className="title-font font-medium sm:text-4xl text-3xl">{log.getAllLogs?.length}</h2>
        <p className="leading-relaxed">Logs</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2 text-center">
        <h2 className="title-font font-medium sm:text-4xl text-3xl">{blog.getAllBlogs?.length}</h2>
        <p className="leading-relaxed">Blogs</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2 text-center">
        <h2 className="title-font font-medium sm:text-4xl text-3xl">{pro.getAllProject?.length}</h2>
        <p className="leading-relaxed">Projects</p>
      </div>
    </div>
  </div>
</section>
</div>

    </>
  )
}

export default page