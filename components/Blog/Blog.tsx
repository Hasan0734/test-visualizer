import React from 'react';
import SocialLinks from './SocialLinks';

const Blog = () => {
    return (
        <div className='mt-5'>
            <p className='blog-text2'>Networking is a powerful tool for job seekers, yet many people fail to utilize it to its fullest potential. Building a strong professional network can help you uncover job opportunities, get advice and insights from experienced professionals, and even receive referrals for open positions. In this blog post, we&apos;ll explore the importance of networking for job seekers and provide some tips on how to do it effectively.</p>
            <br />

            <h3 className='text-xl font-bold font-dmsans text-black'>Why Networking Matters for Job Seekers</h3>
            <br />
            <p className='blog-text2'>
                According to a survey by LinkedIn, 70% of people in 2016 were hired at a company where they had a connection. This highlights the importance of networking in today&apos;s job market. Not only can it help you get your foot in the door at a company, but it can also give you a better understanding of the company culture and the role you&apos;re applying for.
            </p>
            <br />
            <p className='blog-text2'>
                In addition, networking can help you develop relationships with professionals in your field. By attending industry events or connecting with people on LinkedIn, you can gain valuable insights and advice on how to succeed in your career. You can also learn about potential job openings that may not be advertised publicly.
            </p>
            <br />
            <div className='py-10'>
                <img src="/assets/image/blog-img.png" className='w-full' alt="blog-image" />
            </div>
            <br />

            <p className='text-black blog-text'>
                <strong>
                    Look for ways to help the people in your network. Offer to introduce them to someone who can help with a problem they&apos;re facing, or share a relevant article or resource with them.
                </strong>
            </p>
            <br />
            <p className='leading-6 blog-text2'>
                Networking can also help you access the hidden job market, which refers to job openings that are not advertised publicly. According to a report by career platform Jobvite, up to 80% of job openings are never advertised, and networking can help you uncover these opportunities.
            </p>
            <br />

            <p className='blog-text italic relative before:absolute before:top-0 before:bottom-0 before:bg-black before:w-[2px]'>
                <span className='pl-5 block'>
                    &quot;When attending networking events, it&apos;s important to come prepared with a brief pitch about yourself and what you&apos;re looking for in terms of job opportunities. You should also have your resume and business cards on hand to give to potential contacts.&quot;
                </span>
            </p>
            <br />

            <p className='blog-text2'>To get started with networking, there are several approaches you can take. First, you can reach out to your existing network of friends, family, and former colleagues. Let them know that you are actively seeking job opportunities and ask if they have any leads or can introduce you to people in your desired industry.</p>
            <br />
            <h3 className='text-xl font-bold font-dmsans text-black'>Why Following up helps</h3>
            <br />
            <p className='blog-text2'>Finally, don&apos;t forget to follow up with your contacts after your initial meeting. Send a thank you email or message, and continue to nurture the relationship by keeping in touch and providing value where you can.</p>
            <br />
            <p className='blog-text2'>
                In conclusion, networking is a powerful tool for job seekers that can help you access the hidden job market and uncover new opportunities. By building and maintaining a strong network, you can increase your chances of finding your dream job.
            </p>
            <br />
            <div className='flex justify-center'>
                <div>
                    <h2 className='font-dmsans text-[18px] font-bold'>Share this post</h2>
                    <SocialLinks />
                </div>
            </div>

            <br />
            <br />
            <br />
            <hr className='border border-black' />
            <br />
            <br />
            <div>
                <h1 className='uppercase text-center font-lexend font-bold'>VISUALIZER</h1>
                <p className='text-center font-dmsans text-sm text-black/60'>Content Marketing at Visualizer</p>
            </div>
        </div>
    );
};

export default Blog;