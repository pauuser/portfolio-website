import React from 'react'
import {Element} from "react-scroll";
import INFO from "../data/data";
import Contact from "./Contact";

function Contacts() {
    return (
        <Element name='contacts'>
            <div className='h-[80px]'></div>
            <div className='w-full bg-white mx-auto px-8 py-6 justify-center '>
                <div className='my-auto md:max-w-[60%] px-4'>
                    <h1 className='font-bold text-5xl py-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-200'>Contacts</h1>

                    <p className='text-lg py-4 text-gray-700'>
                        Thank you for taking interest in getting in touch with me!
                        I would welcome any of your feedback, questions and suggestions.
                        You can contact me via mail or any social media.
                    </p>
                    <ul>
                        {INFO.contacts.map((contact) => (
                            <li>
                                <Contact
                                    logo={contact.logo}
                                    alt={contact.alt}
                                    title={contact.title}
                                    link={contact.link}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Element>
    );
}

export default Contacts;