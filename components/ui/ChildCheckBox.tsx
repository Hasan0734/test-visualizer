import React from 'react';
import Checkbox from './CheckBox';
import slugify from 'slugify';

const ChildCheckBox = ({ childRef, toggle, childData, handleOnChange, device }: any) => {

    const isOpen =  toggle ? 'visible opacity-100' : 'invisible opacity-0'

    console.log({isOpen})
    
    return (
        <>
            <ul
                ref={childRef}
                className={`px-4  transition-all duration-500 ${isOpen}`}
                style={{ height: toggle ? `${childRef.current?.scrollHeight}px` : '0px' }}
            >
                {childData?.map((child: any, i: number) => <li key={++i} className='py-2'>
                    <Checkbox
                        title={child.name}
                        name={slugify(device === 'large' ? child.name : child.name + 1, '-').toLowerCase()}
                        container={'gap-3'}
                        labelClass={'line-clamp-1'}
                        handleOnChange={handleOnChange}
                        value={child._id}
                    />
                </li>)}

            </ul>
        </>
    );
};

export default ChildCheckBox;