"use client"
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between flex-col w-full z-[99] fixed top-0 ${scrolling ? 'bg-black' : 'bg-lightBlue'}`}>
      <div className="container max-lg:px-8 max-md:px-4 flex justify-between w-full mx-auto lg:py-4 md:py-3 py-[5px] items-center relative">
        <button onClick={() => setOpen(!open)} className={`hidden md:max-w-[39px] md:h-11 h-full max-w-5 w-full justify-center items-center max-lg:absolute max-lg:right-8 max-md:right-4 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
          <span className={`w-6 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[3px] md:mb-2 mb-[3px] !rounded-full bg-white relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 md:!-mb-1 after:rotate-90 after:!rounded-sm after:bg-white !bg-white" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[3px] md:mb-2 mb-[3px] !rounded-full bg-white ${open ? "hidden" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[3px] md:mb-2 mb-[3px] !rounded-full bg-white after:!bg-white ${open ? "-translate-x-12 !bg-white" : ""}`}></span>
        </button>
        <Link href="/">
          <Image className="lg:!max-w-[68px] md:max-w-14 sm:max-w-12 max-w-10 h-auto w-full" src="/assets/images/webp/header-logo.webp" width={68} height={68} alt="logo" />
        </Link>
        <div className={`flex xl:gap-5 xl:pl-10 lg:pl-5 items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto gap-4 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern bg-cover bg-top max-lg:duration-300 justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <Link onClick={() => setOpen(!open)} key={index} href={item.link} className="relative lg:text-sm text-xl text-white transition-all duration-300 !tracking-[6%] ease-linear group">{item.title}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all rounded-xl duration-300 ease-linear group-hover:w-full"></span>
            </Link>
          ))}
          <div className="lg:hidden max-lg:block">
            <button onClick={() => setOpen(!open)} className="flex items-center justify-center leading-[120%] whitespace-nowrap custom-shadow linear-gradient text-white bg-white xl:px-[23px] lg:px-5 px-4 lg:py-[9px] py-2 rounded-lg xl:text-xl lg:text-lg text-base font-extrabold !tracking-[6%]">Mint Now</button>
          </div>
        </div>
        <div className="lg:block max-lg:hidden">
          <button className="flex items-center justify-center leading-[120%] whitespace-nowrap custom-shadow linear-gradient text-white bg-white xl:px-[23px] lg:px-5 px-4 lg:py-[9px] py-2 rounded-lg xl:text-xl lg:text-lg text-base font-extrabold !tracking-[6%]">Mint Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
