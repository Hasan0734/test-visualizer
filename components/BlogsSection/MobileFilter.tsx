import React, { useRef, useState } from 'react';
import FilterItem from './FilterItem';
import { setFilterCategory } from '@/features/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';


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
    }
    const handleClear = () => {
        dispatch(setFilterCategory(selected))
    }


    return (
        <div className='relative block md:hidden'>
            <div>
                <h2 className='font-dmsans font-bold text-[25px] text-black'>See all stories</h2>
                <div className='mt-4 mb-10'>
                    <button onClick={handleToggle} className='filter-btn filter-btn-inside'>
                        Filter Stories
                        <svg width={17} height={19} viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.40479 2.72559C5.13957 2.72559 4.88521 2.83095 4.69768 3.01849C4.51014 3.20602 4.40479 3.46038 4.40479 3.72559C4.40479 3.99081 4.51014 4.24517 4.69768 4.4327C4.88521 4.62024 5.13957 4.72559 5.40479 4.72559C5.67 4.72559 5.92436 4.62024 6.11189 4.4327C6.29943 4.24517 6.40479 3.99081 6.40479 3.72559C6.40479 3.46038 6.29943 3.20602 6.11189 3.01849C5.92436 2.83095 5.67 2.72559 5.40479 2.72559ZM2.57479 2.72559C2.78139 2.14006 3.16452 1.63303 3.67138 1.27438C4.17825 0.91574 4.78387 0.723145 5.40479 0.723145C6.0257 0.723145 6.63132 0.91574 7.13819 1.27438C7.64505 1.63303 8.02818 2.14006 8.23479 2.72559H15.4048C15.67 2.72559 15.9244 2.83095 16.1119 3.01849C16.2994 3.20602 16.4048 3.46038 16.4048 3.72559C16.4048 3.99081 16.2994 4.24517 16.1119 4.4327C15.9244 4.62024 15.67 4.72559 15.4048 4.72559H8.23479C8.02818 5.31113 7.64505 5.81816 7.13819 6.17681C6.63132 6.53545 6.0257 6.72805 5.40479 6.72805C4.78387 6.72805 4.17825 6.53545 3.67138 6.17681C3.16452 5.81816 2.78139 5.31113 2.57479 4.72559H1.40479C1.13957 4.72559 0.885215 4.62024 0.697679 4.4327C0.510142 4.24517 0.404785 3.99081 0.404785 3.72559C0.404785 3.46038 0.510142 3.20602 0.697679 3.01849C0.885215 2.83095 1.13957 2.72559 1.40479 2.72559H2.57479ZM11.4048 8.7256C11.1396 8.7256 10.8852 8.83095 10.6977 9.01849C10.5101 9.20602 10.4048 9.46038 10.4048 9.7256C10.4048 9.99081 10.5101 10.2452 10.6977 10.4327C10.8852 10.6202 11.1396 10.7256 11.4048 10.7256C11.67 10.7256 11.9244 10.6202 12.1119 10.4327C12.2994 10.2452 12.4048 9.99081 12.4048 9.7256C12.4048 9.46038 12.2994 9.20602 12.1119 9.01849C11.9244 8.83095 11.67 8.7256 11.4048 8.7256ZM8.57479 8.7256C8.78139 8.14006 9.16452 7.63303 9.67138 7.27438C10.1782 6.91574 10.7839 6.72314 11.4048 6.72314C12.0257 6.72314 12.6313 6.91574 13.1382 7.27438C13.645 7.63303 14.0282 8.14006 14.2348 8.7256H15.4048C15.67 8.7256 15.9244 8.83095 16.1119 9.01849C16.2994 9.20602 16.4048 9.46038 16.4048 9.7256C16.4048 9.99081 16.2994 10.2452 16.1119 10.4327C15.9244 10.6202 15.67 10.7256 15.4048 10.7256H14.2348C14.0282 11.3111 13.645 11.8182 13.1382 12.1768C12.6313 12.5354 12.0257 12.728 11.4048 12.728C10.7839 12.728 10.1782 12.5354 9.67138 12.1768C9.16452 11.8182 8.78139 11.3111 8.57479 10.7256H1.40479C1.13957 10.7256 0.885215 10.6202 0.697679 10.4327C0.510142 10.2452 0.404785 9.99081 0.404785 9.7256C0.404785 9.46038 0.510142 9.20602 0.697679 9.01849C0.885215 8.83095 1.13957 8.7256 1.40479 8.7256H8.57479ZM5.40479 14.7256C5.13957 14.7256 4.88521 14.831 4.69768 15.0185C4.51014 15.206 4.40479 15.4604 4.40479 15.7256C4.40479 15.9908 4.51014 16.2452 4.69768 16.4327C4.88521 16.6202 5.13957 16.7256 5.40479 16.7256C5.67 16.7256 5.92436 16.6202 6.11189 16.4327C6.29943 16.2452 6.40479 15.9908 6.40479 15.7256C6.40479 15.4604 6.29943 15.206 6.11189 15.0185C5.92436 14.831 5.67 14.7256 5.40479 14.7256ZM2.57479 14.7256C2.78139 14.1401 3.16452 13.633 3.67138 13.2744C4.17825 12.9157 4.78387 12.7231 5.40479 12.7231C6.0257 12.7231 6.63132 12.9157 7.13819 13.2744C7.64505 13.633 8.02818 14.1401 8.23479 14.7256H15.4048C15.67 14.7256 15.9244 14.831 16.1119 15.0185C16.2994 15.206 16.4048 15.4604 16.4048 15.7256C16.4048 15.9908 16.2994 16.2452 16.1119 16.4327C15.9244 16.6202 15.67 16.7256 15.4048 16.7256H8.23479C8.02818 17.3111 7.64505 17.8182 7.13819 18.1768C6.63132 18.5354 6.0257 18.728 5.40479 18.728C4.78387 18.728 4.17825 18.5354 3.67138 18.1768C3.16452 17.8182 2.78139 17.3111 2.57479 16.7256H1.40479C1.13957 16.7256 0.885215 16.6202 0.697679 16.4327C0.510142 16.2452 0.404785 15.9908 0.404785 15.7256C0.404785 15.4604 0.510142 15.206 0.697679 15.0185C0.885215 14.831 1.13957 14.7256 1.40479 14.7256H2.57479Z" fill="#382130" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={` ${toggle ? 'block' : 'hidden'}`}>
                <div className='fixed inset-0 bg-white z-10  h-screen' >

                    {/* header */}
                    <div className='relative bg-secondary2 py-5 flex items-center justify-end gap-20 px-6'>
                        <h2 className='font-dmsans font-bold text-base text-white'>Filter what you want to see</h2>
                        <button onClick={handleToggle} className='p-1'>
                            <svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8095 12.8044C12.8699 12.8695 12.9178 12.9467 12.9505 13.0316C12.9832 13.1166 13 13.2077 13 13.2996C13 13.3916 12.9832 13.4827 12.9505 13.5677C12.9178 13.6526 12.8699 13.7298 12.8095 13.7949C12.7491 13.8599 12.6774 13.9115 12.5985 13.9467C12.5196 13.9819 12.4351 14 12.3497 14C12.2643 14 12.1797 13.9819 12.1008 13.9467C12.0219 13.9115 11.9502 13.8599 11.8898 13.7949L6.5 7.98957L1.11017 13.7949C0.988215 13.9262 0.822802 14 0.650325 14C0.477848 14 0.312435 13.9262 0.190476 13.7949C0.0685162 13.6635 3.39993e-09 13.4854 0 13.2996C-3.39993e-09 13.1139 0.0685162 12.9358 0.190476 12.8044L5.58111 7L0.190476 1.19557C0.0685162 1.06423 -1.28505e-09 0.886095 0 0.70035C1.28505e-09 0.514606 0.0685162 0.336469 0.190476 0.205128C0.312435 0.0737866 0.477848 1.3839e-09 0.650325 0C0.822802 -1.3839e-09 0.988215 0.0737866 1.11017 0.205128L6.5 6.01043L11.8898 0.205128C12.0118 0.0737866 12.1772 -3.66147e-09 12.3497 0C12.5222 3.66147e-09 12.6876 0.0737866 12.8095 0.205128C12.9315 0.336469 13 0.514606 13 0.70035C13 0.886095 12.9315 1.06423 12.8095 1.19557L7.41889 7L12.8095 12.8044Z" fill="white" />
                            </svg>
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
                                    {categories.map((category: { id: number, name: string }, i: number) => <FilterItem handleOnChange={handleOnChange} category={category} key={++i} />)}
                                </ul>

                            </div>
                        </div>

                    </div>
                    {/* apply filter */}

                    <div className='mfilter-apply-container absolute left-0 right-0 bottom-0 px-6 py-3 flex items-center justify-between'>
                        <button onClick={handleClear} className=' px-6 py-1.5 text-black font-dmsans text-sm font-medium rounded-sm'>
                            Clear
                        </button>
                        <button onClick={handleApply} className='bg-secondary px-6 py-1.5 text-white font-dmsans text-sm font-medium uppercase rounded-sm'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFilter;