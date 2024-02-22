"use client"

import VideoBackground from '@/app/components/VideoBg'
import { graphQLClient } from '@/clients/api'
import { createBlog } from '@/graphql/mutation/blog'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const page = () => {

  const user=useSession()
  var mail=''
  if(user.data?.user?.email)
  {
    mail=user.data.user.email
  }
  
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  // Handler function for input change
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler function for form submission
  const payload= {
     title: `${formData.title}`,
     content: `${formData.description}`,
     email: `${mail}`
   }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you can perform actions like posting the data to a server or updating state
    graphQLClient.request(createBlog,{payload:payload})    
    alert("submitted")
    // Reset form after submission
    setFormData({
      title: '',
      description: ''
    });
  };
  return (
    <div>
      <VideoBackground />
    <div className=' grid grid-cols-12 border border-white p-2 mt-4 mx-[10%] text-white '>
    <div className=' col-span-1'> avatar</div>
    <div className='col-span-11'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl'>
          <input
            type="text"
            name="title"
            placeholder='Title'
            value={formData.title}
            onChange={handleInputChange}
            className='bg-transparent border border-white p-1 w-full'
          />
        </h1>
        <p className='mt-2'>
          <textarea
            name="description"
            cols={37}
            rows={5}
            placeholder='Description'
            value={formData.description}
            onChange={handleInputChange}
            className='bg-transparent border border-white p-1 w-full'
          ></textarea>
        </p>
        <button type="submit" className='mt-2 border border-white p-1 hover:bg-white hover:text-black'>Post</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default page