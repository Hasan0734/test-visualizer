import React, { useRef, useState } from 'react';
import PlusMinus from '../ui/PlusMinus';
import ChildCheckBox from '../ui/ChildCheckBox';

type FilterProps = {
    category:{
        _id:number,
        name:string
        subcategories:{
            _id:number,
            name:string,
            category:number
        }[]
    },
    handleOnChange:(ID:number) => void,
    selected:number[]
}

const FilterItem = ({ category, handleOnChange, selected }: FilterProps) => {

    const [openChild, setOpenChild] = useState(false)
    const childRef: any = useRef();


    return (
        <>
            <li className=''>
                <button type='button' onClick={() => setOpenChild(!openChild)}
                    className={`mfilter-item`}>
                    <span>{category.name}</span>
                    <PlusMinus toggle={openChild} />
                </button>
                <ul
                    ref={childRef}
                    className={`px-4  transition-all duration-500 ${openChild ? 'block' : 'hidden'}`}
                   
                >
                    <ChildCheckBox
                        handleOnChange={handleOnChange}
                        toggle={openChild}
                        childRef={childRef}
                        childData={category.subcategories}
                        device={'small'}
                        defaultSelected = {selected}
                    />
                </ul>
            </li>
        </>
    );
};

export default FilterItem;