import React from 'react';

const HeroSection = () => {
    return (
        <section className='hero-section h-[272px] md:h-[511px] relative overflow-hidden'>
            <div className='container-layout flex items-center h-full'>
                <div className='max-w-[318px] md:max-w-[834px]'>
                    <h2 className='hero-title'>Networking for Career Success</h2>
                    <p className='hero-text mt-3 md:mt-6'>
                        &quot;Discover the power of networking and learn how to build meaningful professional relationships that can help you advance in your career.&quot;
                    </p>
                </div>
            </div>
            <div className='rotate-90 text-vertical absolute bottom-0 right-0 top-0 '>


                <h6 className='font-inter  font-bold  -mt-[14px] sm:-mt-[33px] -ml-[144px]  sm:-ml-[40px]'>
                    <span className='text-[#3A1C30AB]/[0.67] text-[28px]'>
                        Career
                    </span>
                    <span className='text-yellow1/[0.35] sm:text-yellow1/[0.56] text-[26px]'>
                        {" "}Inspiring stories,
                    </span>
                    <span className='text-[#3A1C30AB]/[0.35] sm:text-[#3A1C30AB]/[0.67] text-[23px]'> Networking
                    </span>

                </h6>
                <div className='hidden md:block'>
                    <h5 className='font-inter text-[32px] font-bold -ml-[145px] leading-6'>
                        <span className='text-[#3A1C30AB]/[0.67]  text-[54px]'>
                            Careers {" "}
                        </span>
                        <span className='text-yellow1/[0.56]'>
                            Relationships,

                        </span>
                        <span className='text-[#3A1C30AB]/[0.67]'>Connections</span>

                    </h5>
                    <h4 className='font-inter text-[40px] font-bold -ml-[201px] text-[#3A1C30AB]/[0.67] leading-[66px]'>
                        <span className='text-[55px]'>
                            Ambition {" "}
                        </span>
                        <span>
                            Business opportunities
                        </span>

                    </h4>
                    <h3 className='font-inter text-[49px] font-bold -ml-[161px] text-[#3A1C30AB]/[0.67] leading-[44px]'>
                        <span className='text-[60px]'>
                            Careers {" "}
                        </span>
                        <span>
                            Visualizer, Inspiring
                        </span>

                    </h3>
                    <h2 className='font-inter text-[60px] font-bold -ml-[161px] leading-[70px]'>
                        <span className='text-[#3A1C30AB]/[0.67]'>
                            Careers,
                        </span>
                        <span className="text-yellow1/[0.56]">
                            Careers
                        </span>
                    </h2>
                    <h1 className='font-inter text-[67px] font-bold -ml-[464px]  leading-[70px'>
                        <span className='text-[#3A1C30AB]/[0.67]'>
                            Inspiring stories,
                        </span>
                        <span className="text-yellow1/[0.56]">
                            Inspiring stories
                        </span>
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;