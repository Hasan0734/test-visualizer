import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BlogLists from './BlogLists';

const BlogsSection = () => {
    return (
        <section className='py-10 md:py-28'>
            <div className='layout flex gap-8'>
                <Sidebar />
                <BlogLists  />
            </div>
        </section>
    );
};

export default BlogsSection;