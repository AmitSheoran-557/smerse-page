import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full lg:pt-[152px] sm:pt-[179px] pt-[163px] flex-col md:bg-hero-pattern max-md:bg-hero-pattern-two bg-cover bg-center bg-no-repeat lg:pb-[50px] sm:pb-[105px] pb-[85px]'>
      <Header />
      <div className="container px-4 mx-auto">
        <Image className='max-w-[404px] w-full mx-auto sm:mb-8 mb-[108px] max-sm:max-w-[256px]' src="/assets/images/webp/smerse-logo.webp" alt="hero" width={404} height={241} />
        <Image className='max-w-[401px] w-full mx-auto sm:mb-2.5 mb-[27px] max-lg:max-w-[167px]' src="/assets/images/webp/smerse-word-img.webp" alt="hero" width={404} height={117} />
        <p className='uppercase font-medium xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white text-center max-w-[637px] tracking-[6%] leading-[150%] mx-auto sm:mb-11 mb-[82px]'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE</p>
        <button className='xl:py-4 lg:py-3 py-2.5 xl:px-7 lg:px-6 md:px-5 px-4 bg-white rounded-lg linear-gradient text-white xl:text-xl lg:text-lg text-base font-extrabold mx-auto flex justify-center items-center'>Get Started</button>
        
      </div>
    </div>
  )
}

export default Hero