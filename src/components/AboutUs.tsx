import { ABOUT_LIST } from '@/utils/helper'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='bg-blue relative overflow-hidden'>
            <div className='bg-blue relative lg:py-[189px] max-lg:pt-24 max-sm:pt-[61px] xl:flex items-center justify-center max-w-[1920px] mx-auto' >
                <div className="container mx-auto px-4 relative z-10 w-full">
                    <div className="flex flex-wrap w-full items-center">
                        <div className="xl:w-6/12 w-full max-xl:flex justify-center max-xl:mx-auto">
                            <div className='xl:max-w-[550px] max-xl:mx-auto max-xl:w-full'>
                                <div className="relative lg:mb-7 sm:mb-5 mb-[35px]">
                                    <h1 className="md:text-5xl text-4xl font-black text-white tracking-[6px] relative z-10">About Us</h1>
                                    <span className="absolute inset-0 md:text-5xl text-4xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[-2px] -top-[1px] -translate-x-0.5">About Us</span>
                                </div>
                                {ABOUT_LIST.map((item, index) => (
                                    <div key={index} className='flex gap-5 pb-2 xl:max-w-[507px]'>
                                        <img className='size-[29px]' src={item.imgSrc} alt={item.altText} />
                                        <p className='font-normal text-base tracking-wide leading-customXl text-white'>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="xl:w-6/12 w-full lg:pt-0 max-lg:pt-7 max-sm:pt-4 justify-center flex">
                            <img className='max-w-[654px] max-sm:min-w-[600px] max-xl:min-w-[943px] xl:hidden max-xl:block w-full max-lg:mx-auto max-xl:-translate-x-10' src="/assets/images/webp/about-us-img.webp" alt="about-us" />
                        </div>
                    </div>
                </div>
                <img className='max-w-[954px] absolute xl:block max-xl:hidden right-0 w-full max-lg:mx-auto xl:translate-x-20 lg:ps-20' src="/assets/images/webp/about-us-img.webp" alt="about-us" />
            </div>
        </div>
    )
}

export default AboutUs