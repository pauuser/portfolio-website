import React from 'react'
import {Element} from "react-scroll";
import Languages from "./Languages";
import bmstu from "../assets/bmstu.png";

function Education() {
    const liClassName = 'rounded-2xl hover:shadow'
    return (
        <Element name='education'>
            <div className='h-[80px]'></div>
            <div className='flex flex-col w-full h-full min-h-screen bg-white mx-auto px-8 justify-center text-gray-700'>
                <h1 className='font-bold text-5xl py-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-red-600'>Education</h1>
                <div className='text-xl py-2 grid lg:grid-cols-2'>
                    <div>
                        <p className='font-medium text-3xl py-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-950 to-purple-700'>Bauman Moscow State Technical University (2020 - 2024)</p>
                        <p>Software Engineering Department, ICS7</p>
                        <p>Average score: 5.0 / 5.0</p>
                        <div>
                            <h3 className='text-2xl py-4 font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-950 to-purple-700'>Key courses:</h3>
                            <ul className='flex gap-2 text-center'>
                                <li className={ liClassName + ' bg-red-100' }>Operating systems</li>
                                <li className={ liClassName + ' bg-orange-100' }>Software architecture</li>
                                <li className={ liClassName + ' bg-yellow-100' }>Databases</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex py-2 gap-2 text-center'>
                                <li className={ liClassName + ' bg-green-100' }>Object-oriented programming</li>
                                <li className={ liClassName + ' bg-blue-100' }>Functional and logical programming</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex gap-2 text-center'>
                                <li className={ liClassName + ' bg-blue-200' }>Discrete mathematics</li>
                                <li className={ liClassName + ' bg-purple-100' }>Statistics</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl py-4 font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-950 to-purple-700'>Research:</h3>
                            <ul className='list-disc px-6'>
                                <li>Development of a database for storing and processing parallel corpus of translated texts (2023)</li>
                                <li>Classification of the known methods of text machine translation (2022)</li>
                                <li>Development of a program for generating a realistic tree growth process animation (2022)</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-semibold text-3xl py-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-950 to-purple-700'>Languages</h2>
                            <Languages />
                        </div>
                    </div>
                    <div>
                        <img className='hidden lg:block
                                object-top
                                max-h-[60%] max-w-[60%]
                                align-top
                                py-4 mx-auto my-14'
                             src={bmstu} alt='BMSTU logo'
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Education;