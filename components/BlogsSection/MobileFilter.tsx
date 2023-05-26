import React, { useRef, useState } from 'react';
import FilterItem from './FilterItem';
import { setFilterCategory } from '@/features/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { FilterIcon, XIcon } from '@/public/assets/svg';


const MobileFilter = () => {
    const { categories } = useAppSelector((state) => state.categories)
    const [toggle, setToggle] = useState(false)
    const { subcategory } = useAppSelector(state => state.categoryFilter)
    const dispatch = useAppDispatch()
    const [selected, setSelected]: any = useState(subcategory)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleOnChange = (ID: number) => {
        if (selected.includes(Number(ID))) {
            const filter = selected.filter((cate: number) => cate !== Number(ID))
            setSelected(filter)
        } else {
            setSelected([...subcategory, Number(ID)])
        }
    }

    const handleApply = () => {
        dispatch(setFilterCategory(selected))
        setToggle(false)
    }
    const handleClear = () => {
        dispatch(setFilterCategory([]))
        setSelected([])
    }

    return (
        <div className='relative block md:hidden w-full'>
            <div>
                <h2 className='font-dmsans font-bold text-[25px] text-black'>See all stories</h2>
                <div className='mt-4 mb-10'>
                    <button onClick={handleToggle} className='filter-btn filter-btn-inside'>
                        Filter Stories
                       <FilterIcon/>
                    </button>
                </div>
            </div>
            <div className={` ${toggle ? 'block' : 'hidden'}`}>
                <form className='fixed inset-0 bg-white z-10  h-screen' >

                    {/* header */}
                    <div className='relative bg-secondary2 py-5 flex items-center justify-end gap-20 px-6'>
                        <h2 className='font-dmsans font-bold text-base text-white'>Filter what you want to see</h2>
                        <button onClick={handleToggle} className='p-1'>
                            <XIcon/>
                        </button>
                        <img
                            src='/assets/svg/adminstration.svg'
                            alt='admistration'
                            className='absolute top-0 left-0' />
                    </div>

                    <div className='relative'>
                        {/* filter items  */}

                        <div className='py-5 px-8 h-[75vh] overflow-y-scroll'>
                            <div>
                                <h3 className='font-dmsans font-bold text-sm text-black3 border-b-2 py-2.5'>Filter by:</h3>
                                <ul className=''>
                                    {categories.map((category, i) => <FilterItem 
                                    handleOnChange={handleOnChange} 
                                    category={category} key={++i} 
                                    selected={selected}
                                    />)}
                                </ul>

                            </div>
                        </div>

                    </div>
                    {/* apply filter */}

                    <div className='mfilter-apply-container absolute left-0 right-0 bottom-0 px-6 py-3 flex items-center justify-between'>
                        <button type='reset' onClick={handleClear} className=' px-6 py-1.5 text-black font-dmsans text-sm font-medium rounded-sm'>
                            Clear
                        </button>
                        <button type='button' onClick={handleApply} className='bg-secondary px-6 py-1.5 text-white font-dmsans text-sm font-medium uppercase rounded-sm'>
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MobileFilter;