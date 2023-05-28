import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLinks';

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
        share_post: string,
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


        }
    }

}

const BlogInfo = ({blog}:DataType) => {
    return (
        <div className='mt-2'>
            <h1 className='blog-title'>{blog.title}</h1>

            <br />
            <p className='blog-text'>Discover the importance of building professional relationships and how it can help you land your dream job,</p>
            <br />

            <div>
                <h3 className='font-dmsans font-xl font-bold'>
                    <small className='text-base font-normal'>by</small> <span className='text-secondary uppercase'>{blog.userInfo.name}</span></h3>
                <p className='text-sm font-dmsans font-normal text-gray4 mt-3'>{blog.read_time} read</p>
            </div>
            <div className='mt-5'>
                <h3 className='uppercase text-black/50 font-dmsans font-bold text-base'>{blog.share_post}</h3>

                    <SocialLinks/>
               
            </div>
        </div>
    );
};

export default BlogInfo;