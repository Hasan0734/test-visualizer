import Link from 'next/link';
import React from 'react';

const Inspiring = () => {
    return (
        <section className='bg-pinkdark'>
            <div className='container-layout py-10 md:min-h-[322px] flex items-center justify-center'>
                <div className=''>
                    <h1 className='text-center inspire-title text-white'>Try Visualizer and start your inspiring journey today</h1>
                        <div className='flex justify-center mt-5'>
                            <Link href={'/'} className='bg-white uppercase font-base
                             font-semibold md:font-bold px-2 md:px-5 py-1.5 md:py-2.5 rounded-[3px] text-secondary'>
                                Get Started
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Inspiring;