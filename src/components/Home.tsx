import React from 'react'
import avatar from '../assets/avatar.png'
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from 'react-scroll'

function Home() {
    return (
        <div className='grid md:grid-cols-2 md:grid-rows-1
                             sm:grid-cols-1 sm:grid-rows-2
                             w-full h-screen justify-center items-center px-4'>

            <div className='md:order-[2]'>
                <img className='object-bottom
                                max-h-[60%] max-w-[60%]
                                justify-center items-center
                                py-4 mx-auto my-14'
                     src={avatar} alt='Pavel Ivanov'
                />
            </div>

            <div className='justify-center align-middle
                            text-center md:text-left
                            mx-auto
                            px-4 md:order-[1]'>
                <p className='text-2xl text-amber-800'>Hello! I'm</p>
                <h1 className='text-6xl font-bold text-amber-800'>Pavel Ivanov</h1>
                <h2 className='text-2xl text-amber-800'>I'm a Software Engineer</h2>
                <Link to="about" smooth={true} duration={500}>
                    <button className='group flex justify-center
                                       border-2 px-6 py-2 my-4 md:mx-0 mx-auto
                                       items-center
                                       border-amber-800 text-amber-800 text-xl
                                       hover:bg-amber-800 hover:text-white hover:border-amber-800
                                       transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1'>
                        Learn more
                        <span>
                            <HiChevronDoubleDown className='ml-3' />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;