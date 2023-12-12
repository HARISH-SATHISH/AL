import React from 'react'

const Logcard = () => {
    return (
        <div className=' grid grid-cols-12 border border-white p-2 mb-2'>
            <div className=' col-span-1'> avatar</div>
            <div className=' col-span-11'>
                <h1 className=' text-3xl'>Title</h1>
                <div className='mt-2'>media</div>
                <p className=' mt-2'> description of 150 words</p>
                <p className=' mt-2 '>more details</p>
            </div>
        </div>
    )
}

export default Logcard