// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { categories, subcategories } from '@/utils/data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        let newCategories: any[] = [];

        categories.forEach(blog => {
            const filtersub = subcategories.filter(subblg => subblg.category === blog._id);
            newCategories.push({ ...blog, subcategories: filtersub })
        })

        res.status(200).json({ data: newCategories, status: 'Success' })
    } catch (error: any) {
        res.status(400).json({ message: error.message, status: 'Falied' })
    }
}
