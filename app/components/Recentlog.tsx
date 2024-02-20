"use client"
import React from 'react'
import '../globals.css'

import { useGetAllLogs } from '@/hooks/log'


const Recentlog = () => {

    // const data = await graphQLClient.request(getAllLogs)
    //  const {data}=useQuery<any>({
    //     queryKey:['logs'],
    //     queryFn: ()=> graphQLClient.request(getAllLogs)
    //  })
    const data=useGetAllLogs()

     
    
    return (
        
        <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 overflow-x-scroll h-[40%] scrollbar'>
            {data?.data?.getAllLogs?.map((log: { obj: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; note: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => <div className=' mb-5 p-2 border border-white grid grid-cols-10'  >
                <div className=' col-span-1'>avatar</div>
                <div className=' col-span-9'><h1>{log?.obj}</h1>
                    <p>{log?.note}</p>
                </div>
            </div>)} 
            
        </div>
    )
}

export default Recentlog