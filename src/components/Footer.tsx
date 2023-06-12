import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[80px] items-center justify-center text-lg font-mono text-gray-500 text-center'>
            <div>
                Pavel Ivanov, 2023
            </div>
            <a href='https://github.com/pauuser/portfolio-website' className='underline text-gray-400'>
                This page source code
            </a>
        </div>
    );
}

export default Footer;