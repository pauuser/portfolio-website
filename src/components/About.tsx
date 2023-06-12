import React, {useState} from 'react'
import { Element } from 'react-scroll'

import INFO from '../data/data'
import avatar from '../assets/avata-2.gif'
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

    const btnClassNames = 'group flex justify-center\n' +
        'border-2 px-6 py-2 my-4 md:mx-0 mx-auto\n' +
        'items-center\n' +
        'border-amber-800 text-amber-800 text-xl\n' +
        'hover:bg-amber-800 hover:text-white hover:border-amber-800\n' +
        'transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1\n' +
        'hover:animate-none ';

    const hardSkillsClassNames = btnClassNames + (hardSkills ? 'animate-none' : '');
    const softSkillsClassNames = btnClassNames + (hardSkills ? 'animate-none' : '');

    return (
        <Element name='about'>
            <div className='flex flex-col w-full h-full min-h-screen mx-auto px-8 justify-center bg-white'>
                <div className='grid md:grid-cols-2 md:grid-rows-1
                                     sm:grid-cols-1 sm:grid-rows-2 gap-8'>
                    <div>
                        <img className='object-bottom
                                max-h-[60%] max-w-[60%]
                                justify-center items-center
                                py-4 mx-auto my-14'
                             src={avatar} alt='Pavel Ivanov'
                        />
                    </div>
                    <div className=''>
                        <h1 className='text-5xl font-bold'>About me</h1>
                        <p className='text-xl py-4'>
                            I am a 20 y.o. backend developer living and studying in Moscow, Russia.
                            I believe that <b> software engineering can make the world a better place</b>.
                            I am looking for new projects which will benefit the world and people around me.
                        </p>
                        <div className='flex gap-4'>
                            <button className={hardSkillsClassNames}
                                onClick={() => SetOppositeHardSkills()}>
                                { hardSkills ? "Hide hard skills " : "Show hard skills" }
                            </button>
                            <button className={softSkillsClassNames}
                                    onClick={() => SetOppositeSoftSkills()}>
                                { softSkills ? "Hide soft skills " : "Show soft skills" }
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
                            Technologies
                            <Technologies/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default About;