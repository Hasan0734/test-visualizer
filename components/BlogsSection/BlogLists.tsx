import React from 'react';
import BlogCard from '../ui/BlogCard';
import MobileFilter from './MobileFilter';
import SponsorCard from '../ui/SponsorCard';
import { useAppSelector } from '@/app/hooks';



const BlogLists = ({blogRef}:any) => {

    const {blogs, isLoading} = useAppSelector(state => state.blogs);
    const {subcategory} = useAppSelector(state => state.categoryFilter)

    let filterBlogs:any[] = blogs


    if(subcategory?.length > 0){
        filterBlogs  = blogs.filter((blog:any)=> {
            return subcategory.filter((id:any) => {
                return id === blog.subcategory;
            }).length !== 0
        });
    }else{
        filterBlogs = blogs
    }
    
    return (
        <div ref={blogRef} className='w-full md:w-auto self-start'>
            <MobileFilter  />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {!isLoading ? filterBlogs.map((blog: any, i: number) => (
                    <>
                       { blog.type === 'general' && <BlogCard blog={blog} key={++i} />}
                       { blog.type === 'sponsored' && <SponsorCard blog={blog} key={++i}/>}
                    </>
                )):<div>Loading</div>}
                {filterBlogs?.length === 0 && !isLoading && <div>Blog not found</div>}

            </div>
        </div>
    );
};

export default BlogLists;