import React from 'react'

function WhatWeOffer() {
    return (
        <>   
        <div className=" flex justify-center  items-center  mt-40 flex-col">
            <h1 className=' text-[8rem] '> What We Offer</h1>
            <p className=' text-4xl m-[-10px]' style={{ fontWeight: "100" }}> This is the second page</p>
            <button> Explore</button>
        </div>

        {/* Card Services */}
        <div className=' flex justify-around items-center mt-40 gap-10  bg-amber-600'>
            <div className=' w-[25rem] h-[20rem] border-2 border-black flex flex-col justify-center items-center '>     
                <h1 className=' text-3xl '> Service 1</h1>
                <p className=' m-10 text-center '> Description for service 1. This service offers great value and quality.</p>
            </div>
            <div className=' w-[25rem] h-[20rem] border-2 border-black flex flex-col justify-center items-center '>
                <h1 className=' text-3xl '> Service 2</h1>
                <p className=' m-10 text-center '> Description for service 2. This service offers great value and quality.</p>
            </div>
           
        </div>
    
        </>
    )
}

export default WhatWeOffer