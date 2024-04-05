import React from 'react'
import heroimg from '../assets/1.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gray-800 text-white' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col flex-1'>
                <h2>
                    I am Full Stack Developer
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum repudiandae provident minus animi consequatur a aliquid pariatur magni, harum impedit aliquam dignissimos soluta labore! Earum eos libero quia laborum tempore necessitatibus, architecto tempora cupiditate veniam repellendus amet, deleniti atque sunt nulla consectetur in magnam laboriosam at dolorum facere provident.
                </p>

                <div>
                    <button>
                        Portfolio
                        <span>
                        <AiOutlineArrowRight/>
                         </span>
                    </button>
                </div>
            </div>

            <div className='flex flex-1'>
                <img src={heroimg} alt="profile" className='rounded-2xl mx-auto w-2/3  md:w-full md:h-60 ' />
            </div>
        </div>
    </div>
  )
}

export default Home