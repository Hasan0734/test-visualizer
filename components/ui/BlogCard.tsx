import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'react-feather';
import slugify from 'slugify';
// var slugify = require('slugify')
type DataType = {
    title: string;
    content: string;
    author: number;
    category: number;
    subcategory: number;
    banner: string;
    type: string;

}

const BlogCard = ({ blog }: any) => {
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


                        5 min read
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
                            <Link href="/bookmark" className=''>
                                <svg className='h-4 sm:h-5 w-4 sm:w-5 hover:text-yellow1 text-black' viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 18V0H8V2H2V14.95L7 12.8L12 14.95V8H14V18L7 15L0 18ZM12 6V4H10V2H12V0H14V2H16V4H14V6H12Z" fill="currentColor" />
                                </svg>

                            </Link>
                        </li>
                        <li>
                            <Link href="/facebook" >

                                <svg className='h-4 sm:h-5 w-4 sm:w-5 hover:text-yellow1 text-black' viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10.025C20 4.50502 15.52 0.0250244 10 0.0250244C4.48 0.0250244 0 4.50502 0 10.025C0 14.865 3.44 18.895 8 19.825V13.025H6V10.025H8V7.52502C8 5.59502 9.57 4.02502 11.5 4.02502H14V7.02502H12C11.45 7.02502 11 7.47502 11 8.02502V10.025H14V13.025H11V19.975C16.05 19.475 20 15.215 20 10.025Z" fill="currentColor" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/instagram">
                                <svg className='h-4 sm:h-5 w-4 sm:w-5 hover:text-yellow1 text-black'
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="currentColor" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;