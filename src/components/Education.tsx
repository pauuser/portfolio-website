import React from 'react'
import {Element} from "react-scroll";

function Education() {
    return (
        <Element name='education'>
            <div className='flex flex-col w-full h-full min-h-screen bg-cyan-200 mx-auto px-8 justify-center'>
                <h1 className='font-bold text-5xl'>Education</h1>
                <div>
                    <h2 className='font-semibold text-3xl py-4'>University</h2>
                    <p>Bauman Moscow State Technical University (2020 - 2024)</p>
                    <p>Software Engineering Department, ICS7</p>
                    <p>Average score: 5.0 / 5.0</p>
                    <p>
                        Key courses:
                        <ul>
                            <li>Operating systems</li>
                            <li>Software architecture</li>
                            <li>Databases</li>
                            <li>Object-oriented programming</li>
                            <li>Functional and logical programming</li>
                            <li>Discrete mathematics, statistics, linear algebra</li>
                        </ul>
                    </p>
                    <p>
                        Research:
                        <ul>
                            <li>Development of a database for storing and processing parallel corpus of translated texts (2023)</li>
                            <li>Classification of the known methods of text machine translation (2022)</li>
                            <li>Development of a program for generating a realistic tree growth process animation (2022)</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold text-3xl py-4'>Languages</h2>
                    <ul>
                        <li>Russian - native</li>
                        <li>English - C1 (Advanced)</li>
                        <li>French - A2 (Pre-Intermediate)</li>
                    </ul>
                </div>
            </div>
        </Element>
    );
}

export default Education;