import React from 'react';
import CategoryItem from './CategoryItem';
import { useAppSelector } from '@/app/hooks';


const Sidebar = () => {

    const {categories} = useAppSelector(state => state.categories)

    return (
        <aside className='filter-sidebar py-4 self-start hidden md:block'>

            <h5 className='filter-list  px-4 py-4'>Filter</h5>
            <h5 className='filter-list  mt-4 px-4'>View all</h5>
            <ul className='mt-4'>
                {categories.map((category:any, i:number) => <CategoryItem 
                 key={++i} category={category}/>)}
            </ul>
        </aside>
    );
};

export default Sidebar;