import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLinks';

const BlogInfo = ({blog}:any) => {
    return (
        <div className='mt-2'>
            <h1 className='blog-title'>{blog.title}</h1>

            <br />
            <p className='blog-text'>Discover the importance of building professional relationships and how it can help you land your dream job,</p>
            <br />

            <div>
                <h3 className='font-dmsans font-xl font-bold'>
                    <small className='text-base font-normal'>by</small> <span className='text-secondary uppercase'>{blog.userInfo.name}</span></h3>
                <p className='text-sm font-dmsans font-normal text-gray4 mt-3'>5 min read</p>
            </div>
            <div className='mt-5'>
                <h3 className='uppercase text-black/50 font-dmsans font-bold text-base'>SHARE THIS POST</h3>

                    <SocialLinks/>
               
            </div>
        </div>
    );
};

export default BlogInfo;