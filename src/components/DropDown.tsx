import React from 'react';
// @ts-ignore
import U from 'typescript/lib/lib.es5';

interface DropDownProps {
    bulletList: U[]
}

function DropDown(bulletPoints: DropDownProps) {
    return (
        <div className='text-lg'>
            <ul className='list-disc px-6 text-gray-700'>
                { bulletPoints.bulletList }
            </ul>
        </div>
    );
};

export default DropDown;