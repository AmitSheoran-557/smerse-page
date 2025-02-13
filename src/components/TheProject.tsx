import { THE_PROJECT_LIST } from '@/utils/helper'
import React from 'react'

const TheProject = () => {
    return (
        <div className='bg-blue w-full pb-[130px]' id='project'>
            <div className="container mx-auto flex justify-center items-center flex-col">

                <div className="flex flex-wrap items-center w-full">

                    <div className="lg:w-6/12 w-full justify-center flex">
                        <div>
                            <div className="relative md:mb-5 mb-9">
                                <h1 className="md:text-5xl uppercase text-4xl font-black text-white tracking-[6px] relative z-10">THE PROJECT</h1>
                                <span className="absolute uppercase inset-0 md:text-5xl text-4xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[-2px] -top-[1px] -translate-x-0.5">THE PROJECT</span>
                            </div>
                            {THE_PROJECT_LIST.map((item, index) => (
                                <div key={index} className='flex gap-5 pb-2 xl:max-w-[527px]'>
                                    <img className='size-[29px]' src={item.image} alt={item.alt} />
                                    <p className='font-normal text-base tracking-wide leading-customXl text-white'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full flex lg:justify-end justify-center lg:mt-0 md:mt-[53px] mt-10">
                        <img className='md:max-w-[471px] max-w-md w-full' src="/assets/images/webp/project-girl-img.webp" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TheProject
