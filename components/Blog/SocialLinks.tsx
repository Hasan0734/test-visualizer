import { FacebookF, LinkIcon, LinkdinIcon, TwitterIcon } from '@/public/assets/svg';
import Link from 'next/link';
import React from 'react';

const SocialLinks = () => {
    return (
        <>
            <ul className='flex items-center gap-2 mt-4'>
                <li>
                    <Link href={'/'} className='blog-social hover:text-yellow1 text-currentColor'>
                      <LinkIcon/>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='blog-social hover:text-yellow1 text-currentColor'>
                       <LinkdinIcon/>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='blog-social hover:text-yellow1 text-currentColor'>
                       <TwitterIcon/>
                    </Link>
                </li>

                <li>
                    <Link href={'/'} className='blog-social hover:text-yellow1 text-currentColor'>
                        <FacebookF/>
                    </Link>
                </li>

            </ul>
        </>
    );
};

export default SocialLinks;