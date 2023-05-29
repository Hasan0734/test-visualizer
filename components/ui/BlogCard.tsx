import { BookMark, FacebookFSolid, Instagram } from '@/public/assets/svg';
import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'react-feather';
import slugify from 'slugify';
// var slugify = require('slugify')

type DataType = {
    blog: {
        title: string;
        content: string;
        author: number;
        category: number;
        subcategory: number;
        banner: string;
        type: string;
        published_date: Date,
        read_time: string,
        share_post: string,
       
    }

}

const BlogCard = ({ blog }: DataType) => {
    return (
        <div className='card grid sm:block grid-cols-2 sm:grid-cols-1'>
            <Link href={`/blog/${slugify(blog?.title, '-').toLowerCase()}`}>
                <img className='card-image'
                    src={blog.banner}
                    alt="blog-image" />
            </Link>
            <div className='px-3 sm:px-4 py-1 sm:py-5'>
                <div className='flex items-center gap-3 my-1'>
                    <button className='card-btn
                     bg-[#F4F4F4] '>

                        Business
                    </button>
                    <button className='card-btn'>


                    {blog.read_time} read
                    </button>
                </div>
                <div className='mt-2 sm:mt-5 sm:h-[135px]'>
                    <Link href={`/blog/${slugify(blog?.title, '-').toLowerCase()}`}>
                        <h2 className='card-title line-clamp-2'>{blog.title}</h2>
                    </Link>
                    <p className='card-text mt-1 sm:mt-3 line-clamp-3'>
                        {blog.content}
                    </p>
                </div>

                <div className='flex items-center justify-between mt-3 sm:mt-4 mb-2'>
                    <Link className='bg-black2 inline-block px-2 sm:px-4
                     py-1.5 sm:py-[9px] text-white font-dmsans text-[6px] sm:text-[10px] font-normal'
                        href={`/blog/${slugify(blog?.title, '-').toLowerCase()}`}>
                        <span className='flex items-center justify-between gap-2'>
                            Read more
                            <ChevronRight className='w-[11px] h-[11px] sm:w-4 sm:h-4' />
                        </span>

                    </Link>
                    <ul className='flex items-center gap-3 sm:gap-4'>
                        <li>
                            <Link href="/bookmark" className='hover:text-yellow1 text-black h-4 sm:h-5 w-4 sm:w-5' >
                                <BookMark />
                            </Link>
                        </li>
                        <li>
                            <Link href="/facebook" className='hover:text-yellow1 text-black h-4 sm:h-5 w-4 sm:w-5'>

                                <FacebookFSolid />
                            </Link>
                        </li>
                        <li>
                            <Link href="/instagram" className='h-4 sm:h-5 w-4 sm:w-5 hover:text-yellow1 text-black'>
                                <Instagram width={20} height={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;