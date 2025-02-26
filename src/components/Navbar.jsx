import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setnav] = useState(false)
    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'protfolio'
        },
        {
            id:4,
            link: 'experience'
        },
        {
            id:5,
            link: 'contact'
        },
     
    ]

  return (

   

    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 m-0' >
        <div>
            <h1 className='text-4xl nl-2'>Ali Sami</h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map(({id, link})=>(
                
            <li key={id}
             className='px-4 cursor-pointer capitalize font-medium text-gray-500 list-none hover:text-white duration-300'
            >
                {link}
            </li>

            ))}

        </ul>
        
        <div onClick={()=> setnav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && 
        
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-800
'>
            

            {links.map(({id, link})=>(
                
                <li key={id}
                 className='px-4 cursor-pointer capitalize py-6 text-4xl list-none'
                >
                    {link}
                </li>
    
                ))}
            
            

        </ul>
        }

        
    </div>
  )
}

export default Navbar