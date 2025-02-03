import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full lg:pt-[152px] pt-20 flex-col bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen'>
      <Header />
      <div className="container px-4 mx-auto">
        <Image className='max-w-[404px] w-full mx-auto xl:mb-8 lg:mb-7 mb-6' src="/assets/images/webp/smerse-logo.webp" alt="hero" width={404} height={241} />
        <Image className='max-w-[401px] w-full mx-auto xl:mb-2.5 mb-2 max-lg:px-10' src="/assets/images/webp/smerse-word-img.webp" alt="hero" width={404} height={117} />
        <p className='uppercase font-medium xl:text-4xl lg:text-3xl text-2xl text-white text-center max-w-[637px] tracking-[6%] leading-[150%] mx-auto xl:mb-11 lg:mb-9 md:mb-7 mb-6'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE</p>
        <button className='xl:py-4 lg:py-3 py-2 xl:px-7 lg:px-6 md:px-5 px-4 bg-white rounded-lg linear-gradient text-white xl:text-xl lg:text-lg text-base font-extrabold mx-auto flex justify-center items-center'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero