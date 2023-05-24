import React, { useRef } from 'react';
import Checkbox from './CheckBox';
import slugify from 'slugify';

const ChildCheckBox = ({  childData, handleOnChange, device, defaultSelected }: any) => {
    

    return (
        <>
          
                {childData?.map((child: any, i: number) => <li key={++i} className='py-2'>
                    <Checkbox
                        title={child.name}
                        name={slugify(device === 'large' ? child.name : child.name + 1, '-').toLowerCase()}
                        container={'gap-3'}
                        labelClass={'line-clamp-1'}
                        handleOnChange={handleOnChange}
                        value={child._id}
                        defaultChecked={defaultSelected.includes(child._id) ? true : false}
                    />
                </li>)}

          
        </>
    );
};

export default ChildCheckBox;