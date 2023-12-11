import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='cursor-pointer p-2 text-white flex flex-row justify-between items-center mx-[10%] mt-[1%] border border-white'>
            <span>logo</span>
            <nav className='mr-[7%]'>
                <ul className='flex flex-row '>
                    <li className='mr-[10%] cursor-pointer p-1'>Home</li>
                    <li className='mr-[10%] cursor-pointer p-1'>About</li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/blogs'>Blogs</Link></li>
                    <li className='mr-[10%] cursor-pointer p-1'><Link href='./api/logs'>Logs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar