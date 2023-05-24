// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { blogs, categories, users } from '@/utils/data';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { blogSlug } = req.query;

        const findBlog = blogs.find(blog => slugify(blog.title, '-').toLowerCase() === blogSlug)
        if (!findBlog) {
            res.status(200).json({ message: 'Blog not found', status: 'Success' })
        }



        const filterCategory = categories.find((category: any) => category._id === findBlog?.category)
        const filterUser = users.find((user: any) => user._id === findBlog?.author)

        // categories.forEach(blog => {
        //     const filtersub = subcategories.filter(subblg => subblg.category === blog._id);
        //     newCategories.push({ ...blog, subcategories: filtersub })
        // })




        // filter with category
        const filterRelatedBlog = blogs.filter(blog => blog.category === findBlog?.category).slice(0, 3)

        res.status(200).json({ blog: { ...findBlog, categoryInfo: filterCategory, userInfo: filterUser }, relatedBlogs: filterRelatedBlog, status: 'Success' })
    } catch (error: any) {

        res.status(400).json({ message: error.message, status: 'Falied' })
    }
}
