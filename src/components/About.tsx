import React, {useState} from 'react'
import { Element } from 'react-scroll'

import INFO from '../data/data'
import avatar from '../assets/avatar-2.png'
import DropDown from "./DropDown";
import Technologies from "./Technologies";

function About() {
    const [hardSkills, setHardSkills] = useState(false);
    const [softSkills, setSoftSkills] = useState(false);

    function SetOppositeHardSkills() {
        if (softSkills) {
            setSoftSkills(p => !p);
        }
        setHardSkills(prev => !prev);
    }

    function SetOppositeSoftSkills() {
        if (hardSkills) {
            setHardSkills(p => !p);
        }
        setSoftSkills(prev => !prev);
    }

    const btnClassNames = '\'group flex justify-center border-gray-500 hover:border-white\n' +
        '                                       border-2 px-6 py-2 my-4 md:mx-0 mx-auto\n' +
        '                                       items-center rounded-3xl\n' +
        '                                       text-blue-950 text-lg\n' +
        '                                       hover:text-white hover:bg-gradient-to-br from-blue-500 to-pink-700\n' +
        '                                       transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1\'>';

    const hardSkillsClassNames = btnClassNames + (hardSkills ? 'animate-none' : '');
    const softSkillsClassNames = btnClassNames + (hardSkills ? 'animate-none' : '');

    return (
        <Element name='about'>
            <div className='hidden md:flex h-[80px]'></div>
            <div className='flex flex-col w-full h-full min-h-screen mx-auto px-8 justify-center bg-white'>
                <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-8'>
                    <div>
                        <img className='object-bottom hidden lg:block
                                max-h-[350px] max-w-[350px]
                                md:max-h-[450px] md:max-w-[450px]
                                justify-center items-center
                                py-4 mx-auto my-14'
                             src={avatar} alt='Pavel Ivanov'
                        />
                    </div>
                    <div className=''>
                        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-200'>About me</h1>
                        <p className='text-lg py-4 text-gray-700'>
                            I am a 20 y.o. backend developer living and studying in Moscow, Russia.
                            I believe that <b> software engineering can make the world a better place</b>.
                            I am looking for new projects which will benefit the world and people around me.
                        </p>
                        <div className='flex gap-4'>
                            <button className={hardSkillsClassNames}
                                onClick={() => SetOppositeHardSkills()}>
                                { hardSkills ? "Hide hard skills " : "Hard skills" }
                            </button>
                            <button className={softSkillsClassNames}
                                    onClick={() => SetOppositeSoftSkills()}>
                                { softSkills ? "Hide soft skills " : "Soft skills" }
                            </button>
                        </div>
                        {hardSkills &&
                            <div className='hover:transition-all duration-200 opacity-100'>
                                <DropDown
                                    bulletList={INFO.hardSkills.map(elem => (
                                        <li>{ elem }</li>
                                    ))}
                                />
                            </div>}
                        {softSkills &&
                            <div>
                                <DropDown
                                    bulletList={INFO.softSkills.map(elem => (
                                        <li>{ elem }</li>
                                    ))}
                                />
                            </div>}
                        <div className='text-3xl font-medium py-4'>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-red-200 py-4'>Technologies </h2>
                            <Technologies/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default About;