import React from 'react';
import { ChevronRight } from 'react-feather';

const Breadcrumb = ({blog}:any) => {
    return (
        <div className='flex items-center gap-4 sm:gap-8 flex-wrap'>
            <ul className='flex items-center gap-2'>
                <li className='font-dmsans text-base font-normal  flex items-center gap-2'>
                    Blog
                    <ChevronRight width={15}/>

                </li>
                <li className='font-dmsans text-base font-bold text-center'>
                    {blog.categoryInfo.name}
                </li>
            </ul>
            <p className='hidden sm:block font-dmsans text-sm font-normal text-gray3'>
                Published 11 January,  2023 by {blog.userInfo.username}</p>
        </div>
    );
};

export default Breadcrumb;