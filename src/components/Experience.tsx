import React from 'react'
import {Element} from "react-scroll";
import Works from "./Works";

function Experience() {
    return (
        <Element name='experience'>
            <div className='flex flex-col w-full h-full min-h-screen bg-white mx-auto px-8 justify-center '>
                <h1 className='font-bold text-5xl'>Work experience</h1>

                <Works />

            </div>
        </Element>
    );
}

export default Experience;