import React from 'react'



const Blogcard = () => {
    return (
        <div className=' grid grid-cols-12 border border-white p-2 mt-5'>
            <div className=' col-span-1'> avatar</div>
            <div className=' col-span-11'>
                <h1 className=' text-3xl'>Title</h1>
                <p className=' mt-2'> description of 150 words</p>
            </div>
        </div>
    )
}

export default Blogcard