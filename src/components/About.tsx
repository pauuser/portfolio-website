import React from 'react'
import { Element } from 'react-scroll'

function About() {
    return (
        <Element name='about'>
            <div className='flex flex-col w-full h-full min-h-screen mx-auto px-8 justify-center bg-amber-50'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className=''>
                        <h1 className='text-5xl font-bold'>About me</h1>
                        <p className='text-xl py-4'>
                            I am a 20 y.o. backend developer living and studying in Moscow, Russia.
                            I believe that <b> software engineering can make the world a better place </b>.
                            I am looking for new projects which will benefit the world and people around me.
                        </p>
                        <p className='text-left py-4'>
                            My hard skills are:
                            <ul className='list-disc px-6'>
                                <li>.NET (C#, ASP.NET, EF Core)</li>
                                <li>DBMS (PostgreSQL, MongoDB, Redis)</li>
                                <li>Understanding of Linux</li>
                                <li>Clean architecture building</li>
                                <li>C, C++ and Python skills</li>
                            </ul>
                        </p>
                        <p className='text-left py-4'>
                            My soft skills are:
                            <ul className='list-disc px-6'>
                                <li>Leadership</li>
                                <li>Great at working in teams</li>
                                <li>Diplomatic and open-minded</li>
                                <li>Ambitious, ready to aim high</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        bbbbb
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default About;