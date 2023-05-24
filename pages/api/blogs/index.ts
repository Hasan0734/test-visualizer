// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { blogs } from '@/utils/data';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        res.status(200).json({ data: blogs, status: 'Success' })
    } catch (error: any) {
        res.status(400).json({ message: error.message, status: 'Falied' })
    }
}
