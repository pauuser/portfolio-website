import React from 'react'

function NavBar() {
    return (
        <div className='fixed w-full h-[80px] flex items-center justify-center bg-white shadow-xl text-xl font-medium text-amber-800'>
            <div>
                <ul className='flex'>
                    <li>Me</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;