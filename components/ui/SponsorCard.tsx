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
        share_post: string
    }

}

const SponsorCard = ({ blog }: DataType) => {
    return (
        <div className=' card grid sm:block grid-cols-2 sm:grid-cols-1 overflow-hidden'>
            <Link href={`/blog/${slugify(blog?.title, '-').toLowerCase()}`}>
                <img className='card-image'
                    src={blog.banner}
                    alt="blog-image" />
            </Link>
            <div className='bg-[#181717] px-3 sm:px-4 py-1 sm:py-5 h-full'>
              
                <div className='mt-2 sm:mt-5 sm:h-[135px]'>                
                    <h6 className='font-dmsans text-[10px] sm:text-[11px] uppercase font-bold text-white'>SPONSORED</h6>

                    <p className=' mt-1 sm:mt-3 text-white text-[10px] sm:text-md font-dmsans font-bold'>
                        {blog.content}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SponsorCard;