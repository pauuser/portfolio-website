import React from 'react';

import INFO from "../data/data"
import Technology from "./Technology";

function Technologies() {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
            {INFO.technologies.map((tech) => (
                <div className='py-2'>
                    <Technology
                        logo={tech.logo}
                        alt={tech.alt}
                        title={tech.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Technologies;