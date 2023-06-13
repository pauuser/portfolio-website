import React, {useState} from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from "react-icons/fa";

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='hidden md:flex fixed z-10 w-full h-[60px] items-center justify-center flex bg-white shadow-xl text-lg font-medium'>
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