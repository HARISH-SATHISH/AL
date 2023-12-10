import React from 'react'
import '../globals.css'
const Recentlog = () => {
    return (
        <div className=' text-white border border-white mx-[10%] px-2 py-4 mt-7 overflow-scroll scrollbar '>
            <div className=' mb-5 p-2 border border-white grid grid-cols-10'>
                <div className=' col-span-1'>avatar</div>
                <div className=' col-span-9'><h1>heading</h1>
                    <p>description</p>
                </div>
            </div>
        </div>
    )
}

export default Recentlog