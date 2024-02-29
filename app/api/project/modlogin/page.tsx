"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import VideoBackground from '@/app/components/VideoBg'
import { graphQLClient } from '@/clients/api'
import { verifyMod } from '@/graphql/query/user'


const page = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    });
    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const cred={
        id:parseInt(formData.userId),
        pass:formData.password
    }
    
    const handleSubmit = async () => {
        // e.preventDefault();
        
        const mod = await graphQLClient.request(verifyMod,{payload:cred})

        if(mod.verifyMod?.id)
        {
            
            router.push('./modlogin/moddash')
        }
        
         else{
            alert("wrong creds")
         }
    };
    
    return (
        <div>
        <VideoBackground />
        <div className='text-white border border-white mx-[10%] px-2 py-4 mt-7'>
            <h1 className='text-5xl bg-white text-black p-2 inline-block'> Mod Login</h1>
            {/* <form className="mt-4" > */}
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-sm font-medium text-white">Mod ID</label>
                    <input type="text" id="userId" name="userId" className="mt-1 p-2 block w-full bg-transparent text-white border border-white" onChange={handleChange} value={formData.userId} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-2 block w-full bg-transparent text-white border border-white" onChange={handleChange} value={formData.password} />
                </div>
                <button onClick={handleSubmit} className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded">Login</button>
            {/* </form> */}
        </div>
</div>

  )
}

export default page