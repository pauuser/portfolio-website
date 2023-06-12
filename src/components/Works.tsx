import React from 'react';
import Work from "./Work";

import INFO from "../data/data"

function Works() {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
                {INFO.works.map((work) => (
                    <div className='py-2'>
                        <Work
                            logo={work.logo}
                            alt={work.alt}
                            title={work.title}
                            place={work.place}
                            description={work.description}
                        />
                    </div>
                ))}
        </div>
    );
};

export default Works;