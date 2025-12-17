import HomeComponent from '@/Component/home/HomeComponent'
import React from 'react'

function HomePage() {
    return (
        <>
            <div className=" flex justify-center  items-center  mt-20 flex-col">
                <h1 className=' text-[8rem] '> Let there be Change</h1>
                <p className=' text-4xl m-[-10px]' style={{fontWeight:"100"}}> We build an enviroment together</p>
            <button> Explore</button>
            </div>
            <HomeComponent/>
        </>
    )
}

export default HomePage