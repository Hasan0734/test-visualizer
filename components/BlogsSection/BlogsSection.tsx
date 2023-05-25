import React, { useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BlogLists from './BlogLists';

const BlogsSection = () => {
    const blogRef:any = useRef()
    return (
        <section className='py-10 md:py-28'>
            <div  className='layout flex gap-8'>
                <Sidebar blogRef={blogRef} />
                <BlogLists  blogRef={blogRef} />
            </div>
        </section>
    );
};

export default BlogsSection;