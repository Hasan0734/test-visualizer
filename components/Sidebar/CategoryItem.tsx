import React, { useState, useRef, useEffect } from 'react';
import PlusMinus from '../ui/PlusMinus';
import ChildCheckBox from '../ui/ChildCheckBox';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setFilterCategory } from '@/features/filter/filterSlice';


type CategoryProps = {
    category: {
        _id:number,
        name:string,
        subcategories: {
            _id:number,
            name:string,
            category:number
        }[]
    }
}
const CategoryItem = ({ category }: CategoryProps) => {

    const [openChild, setOpenChild] = useState(false);
    const childRef: any = useRef();
    const {subcategory} = useAppSelector(state => state.categoryFilter)
    const dispatch = useAppDispatch()



    const handleSelect = () => {
        setOpenChild(!openChild)
    }


    const handleOnChange = (ID:number ) => {
    
        if(subcategory.includes(Number(ID))){
            const filter = subcategory.filter((cate:number) => cate !== Number(ID))
            dispatch(setFilterCategory(filter))
        }else{
            dispatch(setFilterCategory([...subcategory,Number(ID)]))
        }

    }

    return (
        <>
            <li className=''>
                <button type='button' onClick={handleSelect}
                    className={`filter-list py-3 px-4 ${openChild ? 'bg-gray2' : ''} relative`}>
                    <span>{category.name}</span>
                    <PlusMinus toggle={openChild} />
                </button>
                {category?.subcategories?.length > 0 &&
                 <ul
                 ref={childRef}
                 className={`px-4  transition-all duration-500 ${openChild ? 'visible ' : 'invisible opacity-0'}`}
                 style={{
                     height: openChild ? `${childRef.current?.scrollHeight}px` : '0px',
                 }}
             >
                <ChildCheckBox
                    childData={category.subcategories}
                    toggle={openChild}
                    handleOnChange={handleOnChange}
                    device={'large'}
                    defaultSelected={subcategory}
                />
                </ul>
                }
            </li>
        </>
    );
};

export default CategoryItem;