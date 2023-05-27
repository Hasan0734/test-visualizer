import { footerItems } from '@/utils/data';
import React from 'react';
import Item from './Item';
import Link from 'next/link';
import InputText from '../ui/InputText';
import { FacebookF, Instagram, PinterestIcon } from '@/public/assets/svg';

const Footer = () => {
    return (
        <footer className='bg-oblack pt-16 pb-14'>

            <div className='container-layout'>

                <div className='flex md:hidden flex-col sm:flex-row justify-between pb-16 gap-6'>
                    <div className='order-2 sm:order-1'>
                        <div>
                            <h3 className='text-white font-semibold font-roboto text-xl'>Join our newsletter</h3>
                            <p className='text-white text-xsm font-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className='flex items-center gap-4 mt-3'>
                            <li>
                                <Link href={'/'} className='text-white'>
                                  <PinterestIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-white'>
                                <Instagram width={15} height={15}/>

                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-white'>
                                  <FacebookF width={10} height={15}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='order-1 sm:order-2'>
                        <form action="">
                            <div className='flex items-center gap-3'>
                                <InputText
                                    placeholder='Enter your email'
                                    label={false}
                                    name={'email'}
                                    type="text"
                                />
                                <button
                                    className='
                                 text-white text-base border px-3 py-2.5 font-roboto font-normal'
                                    type='submit'>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <p className='text-xsm text-white mt-3 md:mt-5 font-roboto font-normal'>By subscribing you agree to with our Privacy Policy</p>
                    </div>
                </div>

                <div className='border-y border-white py-16'>
                    <div className='grid grid-cols-1 xs:grid-cols-2 xsm:grid-cols-3 lg:grid-cols-6 gap-10'>
                        {footerItems?.map((col, i) => <Item key={++i} col={col} />)}
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='flex items-center justify-between'>
                        <h4 className='font-roboto text-base text-white'>
                            <Link href={'/'}>
                                Visualizer
                            </Link>
                        </h4>
                        <p className='text-sm text-white'>
                            2023 Visualizer. All right reserved.
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;