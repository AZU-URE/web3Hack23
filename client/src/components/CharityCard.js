import React, { useState } from 'react'
import img from '../assets/landingPage/mainBanner.jpg'
import { BsBookmark } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const CharityCard = () => {
    const [onBookmark, setOnBookmark] = useState(false)
    const handleBookmarkClick = () => {

        setOnBookmark(prev => !prev)
    }
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col space-y-5 mb-5" >

            <img class="rounded-t-lg" src={img} alt="" />
            <div className='px-5 flex flex-col space-y-5'>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-400'>June 27 2023</p>
                    <p className='text-mainGreen'>023 donations</p>
                </div>
                <p class="text-3xl font-bold text-gray-900">Organisation</p>

                <p class="font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum id error vel beatae, molestiae fugit illum magnam dolore iure officiis consectetur harum,</p>
                <div className='flex space-x-4 '>

                    {onBookmark
                        ?
                        <BsFillBookmarkFill style={{ fontSize: "50px", }} className='text-mainGreen p-3.5 border-mainGreen border-[1px] rounded-md' onClick={handleBookmarkClick} />
                        :
                        <BsBookmark style={{ fontSize: "50px", }} className='text-mainGreen p-3.5 border-mainGreen border-[1px] rounded-md' onClick={handleBookmarkClick} />
                    }
                    <button className='border-mainGreen hover:bg-mainGreen hover:text-white rounded-md text-mainGreen p-3 mb-5 px-6 font-medium text-base border-[1px] w-full'>Donate now</button>
                </div>
            </div>
        </div >

    )
}

export default CharityCard
