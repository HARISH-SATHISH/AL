import Link from 'next/link'
import React from 'react'
import { GiFallingStar } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className=' p-2 text-white flex flex-row justify-between items-center mx-[10%] mt-[1%] border border-white'>
            <span className='cursor-pointer text-2xl border border-white rounded-full p-1  hover:bg-white hover:text-black '><GiFallingStar/></span>
            <nav className='mr-[7%]'>
                <ul className='flex flex-row '>
                    <li className='mr-[10%] cursor-pointer p-1'>Home</li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/about'>About</Link></li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/blogs'>Blogs</Link></li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/logs'>Logs</Link></li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/project'>Project</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar