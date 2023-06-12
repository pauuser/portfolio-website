import React from "react";

function Contact(props: any) {
    const { logo, alt, title, link } = props;

    return (
        <a href={link}>
            <button className='grid grid-cols-6 gap-4 text-gray-700
                            hover:shadow-2xl px-4 py-4 rounded-2xl justify-center items-center
                            transition ease-in-out hover:scale-200 duration-300 hover:-translate-y-1'>
                <div className='object-left
                            w-[60px] h-[60px]'>
                    <img src={logo} alt={alt} />
                </div>
                <div className='text-xl text-center lg:text-left col-span-5'>{title}</div>
            </button>
        </a>
    );
};

export default Contact;