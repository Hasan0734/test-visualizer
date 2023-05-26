import Link from 'next/link';
import React from 'react';

type ColumnProps = {
    col: {
        id: number,
        title: string,
        items: {
            id: number,
            name: string,
            link: string
        }[]
    }
}

const Item = ({ col }: ColumnProps) => {
    return (
        <div className=''>
            <ul>
                <h2 className='footer-title mb-5'>{col.title}</h2>
                {col.items.map((item: any, i: number) => <li className='mt-4 ' key={++i}>
                    <Link href={item.link} className='footer-link' >
                        {item.name}
                    </Link>
                </li>)}
            </ul>
        </div>
    );
};

export default Item;