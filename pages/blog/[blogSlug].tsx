import Blog from '@/components/Blog/Blog';
import BlogInfo from '@/components/Blog/BlogInfo';
import Layout from '@/components/Layout/Layout';
import RelatedPost from '@/components/RelatedPost/RelatedPost';
import Breadcrumb from '@/components/ui/Breadcrumb';
import React from 'react';
import type { GetServerSideProps } from 'next';
import axios from 'axios';
import Subscribe from '@/components/Subscribe/Subscribe';



const index = ({ blog, relatedBlogs }: any) => {
    console.log(blog)
    return (
        <Layout>
            <section className=''>
                <div className='max-w-3xl mx-auto px-6  md:px-0'>

                    <Breadcrumb blog={blog}/>

                    {/* blog  */}
                    <BlogInfo blog={blog} />
                    <Blog />
                </div>
            </section>
            <RelatedPost related={relatedBlogs} />
            <Subscribe/>
        </Layout>
    );
};

export default index;



type dataType = {

    title: string;
    content: string;
    author: number;
    category: number;
    subcategory: number;
    banner: string;
    type: string;
};


export const getServerSideProps: GetServerSideProps<{
    blog: dataType;
}> = async (context: any) => {
    const { blogSlug } = context.params;
    const { data }: any = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/blogs/${blogSlug}`)

    return { props: { blog: data.blog, relatedBlogs: data.relatedBlogs } };
};