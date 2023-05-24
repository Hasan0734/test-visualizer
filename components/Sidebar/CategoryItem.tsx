import React, { useState, useRef } from 'react';
import PlusMinus from '../ui/PlusMinus';
import ChildCheckBox from '../ui/ChildCheckBox';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setFilterCategory } from '@/features/filter/filterSlice';

const CategoryItem = ({ category, setCategoryID }: any) => {

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
                <button onClick={handleSelect}
                    className={`filter-list py-3 px-4 ${openChild ? 'bg-gray2' : ''} relative`}>
                    <span>{category.name}</span>
                    <PlusMinus toggle={openChild} />
                </button>
                {category?.subcategories?.length > 0 && <ChildCheckBox
                    childData={category.subcategories}
                    toggle={openChild}
                    childRef={childRef}
                    handleOnChange={handleOnChange}
                    device={'large'}

                />}
            </li>
        </>
    );
};

export default CategoryItem;