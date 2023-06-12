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
                <img className='md:object-center object-bottom
                                max-h-[60%] max-w-[60%]
                                py-4 mx-auto md:mx-0'
                     src={avatar} alt='Pavel Ivanov'
                />
            </div>

            <div className='justify-center align-middle
                            text-center md:text-left
                            mx-auto
                            px-4 md:order-[1]'>
                <p className='text-2xl text-gray-700'>Hello! I'm</p>
                <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-red-600'>Pavel Ivanov</h1>
                <h2 className='text-2xl text-gray-700'>I'm a Software Engineer</h2>
                <Link to="about" smooth={true} duration={500}>
                    <button className='group flex justify-center border-gray-500 hover:border-white
                                       border-2 px-6 py-2 my-4 md:mx-0 mx-auto
                                       items-center rounded-3xl
                                       text-blue-950 text-lg
                                       hover:text-white hover:bg-gradient-to-br from-blue-500 to-pink-700
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