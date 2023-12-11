import React from 'react'

interface Aboutprops{
    heading:string,
    description:string
}

const Aboutcard:React.FC<Aboutprops> = (props) => {
    return (
        <div className=' text-white border border-white px-2 py-4 mt-4'>
            <h1 className=' text-3xl bg-white text-black p-2 inline-block'> {props.heading}</h1>
            <p className='mt-3'>
                {props.description}
            </p>
        </div>
    )
}

export default Aboutcard