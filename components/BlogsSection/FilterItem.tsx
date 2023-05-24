import React, { useRef, useState } from 'react';
import PlusMinus from '../ui/PlusMinus';
import ChildCheckBox from '../ui/ChildCheckBox';

const FilterItem = ({ category, handleOnChange }: any) => {
    const [openChild, setOpenChild] = useState(false)
    const childRef: any = useRef();

    return (
        <>
            <li className=''>
                <button onClick={() => setOpenChild(!openChild)}
                    className={`mfilter-item`}>
                    <span>{category.name}</span>
                    <PlusMinus toggle={openChild} />
                </button>
                <ChildCheckBox
                    handleOnChange={handleOnChange}
                    toggle={openChild}
                    childRef={childRef}
                    childData={category.subcategories}
                    device={'small'}
                />
            </li>
        </>
    );
};

export default FilterItem;