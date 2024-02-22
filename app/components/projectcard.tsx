import { graphQLClient } from '@/clients/api'
import { getAllProject } from '@/graphql/query/project'
import React from 'react'

const Projectcard = async () => {
  const project=await graphQLClient.request(getAllProject)
  
  return (
    <>
      {project.getAllProject?.map((pro)=>{return(<div key={pro?.id} className=' grid grid-cols-12 border border-white p-2 mt-5'>
            <div className=' col-span-1'>{pro?.id}</div>
            <div className=' col-span-11'>
                <h1 className=' text-3xl'>{pro?.title}</h1>
                <p className=' mt-2'>{pro?.desc}</p>
                <p className=' mt-2'>{pro?.location}</p>
                <p className=' mt-2'>{pro?.modId}</p>
            </div>
        </div>)})}
    </>
  )
}

export default Projectcard