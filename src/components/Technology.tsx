import React from 'react';

function Technology(props: any) {
    const { logo, alt, title } = props;

    return (
        <div className='hover:shadow-2xl px-4 py-4 rounded-2xl justify-center items-center
                        transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1'>
            <div className='w-[80px] h-[80px] mx-auto
                        items-center justify-center'>
                <img className='object-center my-auto' src={logo} alt={alt} />
            </div>
            <div className='font-semibold text-xl justify-center items-center text-center text-gray-700'>{title}</div>
        </div>
    );
};

export default Technology;