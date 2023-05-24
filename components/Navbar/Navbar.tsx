import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className='layout'>
                <div className='hidden md:flex justify-between items-center py-7'>
                    <div>
                        <h3 className='logo uppercase'>
                            <Link href={'/'}>  
                            VISUALIZER
                            </Link>
                            </h3>
                    </div>

                    <div className='flex items-center gap-x-5'>
                        <ul className='nav-items'>
                            <li>
                                <Link className="text-primary text-black px-2 py-1 nav-item" href={'/resume'}>
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link className="text-primary text-black px-2 py-1 nav-item" href={'/resume'}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="text-primary text-black px-2 py-1 nav-item" href={'/resume'}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-primary text-black px-2 py-1 nav-item" href={'/resume'}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div className='flex items-center gap-x-4'>
                            <button className='px-5 py-2 btn border border-secondary'>
                                <span className=''>
                                    Login
                                </span>
                            </button>
                            <button className='px-5 py-2 btn border border-secondary text-white bg-secondary'>
                                <span className=''>
                                    Sign up
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden justify-between items-center py-7 px-8'>
                    <div className='w-11/12 text-center'>
                        <h3 className='text-sm logo uppercase'>VISUALIZER</h3>
                    </div>

                    {/* toggle btn */}

                    <button className='p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={17} viewBox="0 0 23 17" fill="none">
                            <path d="M2 2H21M2 8.5H21M2 15H21" stroke="#393939" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;