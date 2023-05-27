import React from 'react';
import InputText from '../ui/InputText';

const Subscribe = () => {
    return (
        <section className='py-16 hidden md:block'>
            <div className='container-layout'>
                <div>
                    <h1 className='subscribe-title'>Subscribe to our newsletter</h1>
                    <p className='text-center font-dmsans text-md font-normal text-black mt-5'>&quotStay up-to-date with our latest news and insights by subscribing to our newsletter today!&quot</p>
                    <form action="" className='flex justify-center mt-8'>
                        <div className='flex items-center gap-3'>
                            <InputText
                                placeholder='Enter your email'
                                label={false}
                                name={'email'}
                                type="text"
                                className="w-[388px] border border-black py-3.5"
                            />
                            <button
                                className='
                                 text-white bg-black border border-black text-base px-6 py-3 font-roboto font-normal'
                                type='submit'>
                                Sign Up
                            </button>
                        </div>

                    </form>
                    <p className='font-lexend text-[12px] font-normal text-center mt-5'>By clicking Sign Up you&apos;re confirming that you agree with our Terms and Conditions.</p>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;