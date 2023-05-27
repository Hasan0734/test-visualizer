import React from 'react';
import BlogCard from '../ui/BlogCard';

const RelatedPost = ({ related }: any) => {
    return (
        <section className='my-16'>
            <div className='container-layout'>
                <h1 className='font-bold text-[24px] md:text-[48px] text-center'>Related posts</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-5 '>
                    {related.map((blog: any, i: number) => <BlogCard blog={blog} key={++i} />)}

                </div>
            </div>
        </section>
    );
};

export default RelatedPost;