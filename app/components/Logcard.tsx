import { graphQLClient } from '@/clients/api'
import { getAllLogs } from '@/graphql/query/log'
import React from 'react'

const Logcard = async () => {

    const log= await graphQLClient.request(getAllLogs)
    const logs=log.getAllLogs?.reverse()
    
    return (
       <div> 
        {logs?.map((log)=>{return( <div className=' grid grid-cols-12 border border-white p-2 mb-2'>
            <div className=' col-span-1'>{log?.author?.imgUrl}</div>
            <div className=' col-span-11'>
                <h1 className=' text-3xl'>{log?.obj}</h1>
                <div className='mt-2'>{log?.note}</div>
                <p className=' mt-2'> description of 150 words</p>
                <p className=' mt-2 '>more details</p>
            </div>
        </div>)})}       
       </div>
    )
}

export default Logcard