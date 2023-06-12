import React from 'react';

function Work(props: any) {
    const { logo, alt, title, place, description } = props;

    return (
        <div className='hover:shadow-2xl px-4 py-4 rounded-2xl text-gray-700 transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1'>
            <div className=''>
                <img className='object-contain w-[80px] h-[80px]' src={logo} alt={alt} />
            </div>
            <div className='font-semibold text-xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-900'>{title}</div>
            <div className='font-medium'>{place}</div>
            <div>{description}</div>
        </div>
    );
};

export default Work;