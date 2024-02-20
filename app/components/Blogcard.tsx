import { graphQLClient } from '@/clients/api'
import { getAllBlogs } from '@/graphql/query/blog'
import React from 'react'



const Blogcard = async () => {

    const blogs = await graphQLClient.request(getAllBlogs)
    return (
        <>
        {blogs.getAllBlogs?.map((blog)=>{return(<div key={blog?.id} className=' grid grid-cols-12 border border-white p-2 mt-5'>
            <div className=' col-span-1'> avatar</div>
            <div className=' col-span-11'>
                <h1 className=' text-3xl'>{blog?.title}</h1>
                <p className=' mt-2'>{blog?.content}</p>
            </div>
        </div>)})}
        </>
    )
}

export default Blogcard