import React from 'react';

import INFO from "../data/data"
import Technology from "./Technology";

function Languages() {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {INFO.languages.map((lang) => (
                <div className='py-6'>
                    <Technology
                        logo={lang.logo}
                        alt={lang.alt}
                        title={lang.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Languages;