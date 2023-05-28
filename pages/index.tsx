import BlogsSection from '@/components/BlogsSection/BlogsSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import Inspiring from '@/components/Inspiring/Inspiring';
import Layout from '@/components/Layout/Layout';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '@/app/hooks';
import { setBlogs } from '@/features/blogs/blogSlice';
import { setCategories } from '@/features/categories/categoriesSlice';
import { GetServerSideProps } from 'next/types';
import { categories } from '@/utils/data';

type hometype = {
  blogs: {
    title: string;
    content: string;
    author: number;
    category: number;
    subcategory: number;
    banner: string;
    type: string;
    published_date: Date;
    read_time: string,
    share_post: string
  }[],
  categories: {
    _id: number,
    name: string,
  }[]

}

export default function Home({ blogs, categories }: hometype) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setBlogs(blogs))
    dispatch(setCategories(categories))
  }, [])

  return (
    <Layout>

      <HeroSection />
      <BlogsSection />
      <Inspiring />

    </Layout>
  )
}

type dataType = {

  title: string;
  content: string;
  author: number;
  category: number;
  subcategory: number;
  banner: string;
  type: string;
}[];

export const getServerSideProps: GetServerSideProps<{
  blogs: dataType;
}> = async () => {

  const blogs: any = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/blogs`)
  const categories: any = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/categories`)



  return { props: { blogs: blogs.data.data, categories: categories.data.data } };
};

