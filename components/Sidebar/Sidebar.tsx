import React, { useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setFilterCategory } from '@/features/filter/filterSlice';



const Sidebar = ({blogRef}:any) => {

    const dispatch = useAppDispatch()
    const { categories } = useAppSelector(state => state.categories)
    const {subcategory} = useAppSelector(state => state.categoryFilter)

    useEffect(() => {

        if(subcategory?.length){
         window.scrollTo(0, blogRef?.current.scrollHeight + 130)
        }
 
     }, [blogRef.current?.scrollHeight, subcategory])
 

    return (
        <aside className='filter-sidebar py-4 self-start hidden md:block'>

            <form action="">
                <h5 className='filter-list  px-4 py-4'>Filter</h5>
                <button type='reset'
                 onClick={() => dispatch(setFilterCategory([]))} 
                 className='filter-list  mt-4 px-4'>Unselect</button>
                <ul className='mt-4'>
                    {categories.map((category, i) => <CategoryItem
                   
                        key={++i} category={category} />)}
                </ul>

            </form>
        </aside>
    );
};

export default Sidebar;