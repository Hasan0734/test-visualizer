import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'react-feather';


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
        categoryInfo: {
            name: string,
            _id: number,
        },
        userInfo: {
            avatar: string,
            bio: string,
            email: string,
            name: string
            password: string,
            socialMedia: {
                twitter: string,
                instagram: string,
                facebook: string,
                linkedin: string
            }
            username: string,


            website: string,
            _id: number


        },
        share_post: string
    }

}

const Breadcrumb = ({ blog }: DataType) => {

    return (
        <div className='flex items-center gap-4 sm:gap-8 flex-wrap'>
            <ul className='flex items-center gap-2'>
                <li className='font-dmsans text-base font-normal  '>
                    <Link href={'/'} className='flex items-center gap-2'>
                        Blog
                        <ChevronRight width={15} />
                    </Link>

                </li>
                <li className='font-dmsans text-base font-bold text-center'>
                    {blog.categoryInfo.name}
                </li>
            </ul>
            <p className='hidden sm:block font-dmsans text-sm font-normal text-gray3'>
                Published {moment(new Date).format('DD MMM, YYYY')} by {blog.userInfo.username}</p>
        </div>
    );
};

export default Breadcrumb;