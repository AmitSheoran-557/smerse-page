import { THE_VISION_LIST } from '@/utils/helper'
import React from 'react'

const TheVision = () => {
    return (
        <div className='bg-blue w-full lg:pt-0 pt-7 lg:pb-[130px] md:pb-[140px] pb-[67px]' id='vision'>
            <div className=" mx-auto flex justify-center items-center flex-col">
                <div className="relative text-center lg:mb-36 mb-24">
                    <h1 className="md:text-5xl uppercase text-4xl font-black text-white tracking-[6px] relative z-10">THE VISION</h1>
                    <span className="absolute uppercase inset-0 md:text-5xl text-4xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[-2px] -top-[1px] -translate-x-0.5">THE VISION</span>
                </div>
                <div className="flex flex-wrap lg:gap-x-5 gap-9 md:gap-y-20 gap-y-24 justify-center px-4 w-full mx-auto">
                    {THE_VISION_LIST.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full max-w-[366px]">
                            <div className="rounded-[12px] transition-all ease-linear duration-300 bg-gradient-to-b from-[rgba(149,47,254,0.5)] via-[rgba(198,65,198,0.5)] to-[rgba(255,103,107,0.5)] p-[1px] hover:bg-none max-w-[366px] w-full">
                                <div className="group hover:bg-gradient-to-b from-[#952FFE] via-[#C641C6] to-[#FF676B] min-h-[365px] bg-fade-blue rounded-[10px] transition-all ease-linear duration-300 w-full mx-auto">
                                    <div className="bg-gradient-to-b from-[rgba(149,47,254,0.5)] via-[rgba(198,65,198,0.5)] to-[rgba(255,103,107,0.5)] p-[1px] max-w-max rounded-full mx-auto -translate-y-14 group-hover:bg-none">
                                        <div className="p-6 bg-light-blue size-24 transition-all ease-linear duration-300 group-hover:bg-gradient-to-b from-[#952FFE] via-[#C641C6] to-[#FF676B] rounded-full">
                                            <div className="relative text-center">
                                                <h1 className="md:text-4xl uppercase text-3xl font-black text-white tracking-[6px] relative z-10">{item.number}</h1>
                                                <span className="absolute uppercase inset-0 md:text-4xl text-3xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[-2px] -top-[1px] -translate-x-0.5">{item.number}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-white max-w-[280px] -translate-y-3 text-center mx-auto leading-[170%] !tracking-[6%]">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TheVision
