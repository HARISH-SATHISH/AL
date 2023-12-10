import React from 'react'

const Navbar = () => {
    return (
        <div className='cursor-pointer p-2 text-white flex flex-row justify-between items-center mx-[10%] mt-[2%] border border-white'>
            <span>logo</span>
            <nav className='mr-[3%]'>
                <ul className='flex flex-row '>
                    <li className='mr-[10%] cursor-pointer p-1'>Home</li>
                    <li className='mr-[10%] cursor-pointer p-1'>About</li>
                    <li className='cursor-pointer border border-white p-1 px-2'>LOGIN</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar