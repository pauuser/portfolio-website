import React from 'react';
// @ts-ignore
import U from 'typescript/lib/lib.es5';

interface DropDownProps {
    bulletList: U[]
}

function DropDown(bulletPoints: DropDownProps) {
    return (
        <div className='text-xl'>
            <ul className='list-disc px-6'>
                { bulletPoints.bulletList }
            </ul>
        </div>
    );
};

export default DropDown;