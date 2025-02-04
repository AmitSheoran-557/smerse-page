import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='home' className='flex justify-center items-center w-full lg:pt-[152px] sm:pt-[179px] pt-[163px] flex-col md:bg-hero-pattern max-md:bg-hero-pattern-two bg-cover bg-center bg-no-repeat'>
      <Header />
      <div className="container px-4 mx-auto">
        <Image className='max-w-[404px] w-full mx-auto max-sm:min-h-[154px] max-sm:max-w-[256px]' src="/assets/images/webp/smerse-logo.webp" alt="hero" width={404} height={241} />
        <div className="relative mx-auto text-center pb-3 max-sm:pb-7">
          <h1 className="sm:pt-8 max-sm:mt-[108px] text-8xl font-black text-white tracking-[6px] relative z-10 leading-custom-md max-md:text-[40px] max-md:pt-10">SMERSE</h1>
          <span className="absolute inset-0 text-8xl max-md:text-[40px] leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[36%]">SMERSE</span>
        </div>
        <p className='uppercase font-medium xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white text-center max-w-[637px] tracking-[6%] leading-[150%] mx-auto sm:mb-11 mb-[82px]'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE</p>
        <button className='xl:py-4 lg:py-3 py-2.5 xl:px-7 custom-shadow hover:scale-105 transition-all duration-300 ease-linear lg:px-6 md:px-5 px-4 bg-white rounded-lg linear-gradient text-white xl:text-xl lg:text-lg text-base font-extrabold mx-auto flex justify-center items-center'>Get Started</button>
      </div>
      <div className="w-full lg:mt-[50px] custom-shadow sm:mt-[105px] mt-[85px] h-10 bg-gradient-to-t to-light-purple via-light-pink from-light-orange"></div>
    </div>
  )
}

export default Hero