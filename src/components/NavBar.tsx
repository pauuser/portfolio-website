import React from 'react'
import { Link } from 'react-scroll'

function NavBar() {
    return (
        <div className='fixed z-10 w-full h-[60px] flex items-center justify-center bg-white shadow-xl text-lg font-medium'>
            <div className='text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-red-600'>
                <ul className='flex'>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            Me
                        </Link>
                    </li>
                    <li>
                        <Link to="education" smooth={true} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="contacts" smooth={true} duration={500}>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;