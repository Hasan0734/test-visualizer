import React from 'react';

    interface proptype {
        toggle: boolean
    }

const PlusMinus = ({ toggle }:proptype) => {
    return (
        <>
            <div className='relative'>
                <span className={`absolute w-[14px] h-[2.2px] rounded-md bg-gray-800 block ${toggle ? '-rotate-90 opacity-0' : 'rotate-0'}`}></span>
                <span className={`w-[14px] h-[2.2px]  rounded-md bg-gray-800 block duration-200 ${toggle ? 'rotate-0 ' : '-rotate-90'}`}></span>
            </div>
        </>
    );
};

export default PlusMinus;