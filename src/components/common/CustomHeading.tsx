import React from 'react'

interface CustomHeadingProps {
    title: string,
    titleTwo: string,
    customStyle?: string,
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ title, titleTwo, customStyle }) => {
    return (
        <div>
            <div className={`relative ${customStyle}`}>
                <h1 className="md:text-5xl uppercase text-4xl font-black text-white tracking-[6px] relative z-10">{title}</h1>
                <span className="absolute uppercase inset-0 md:text-5xl text-4xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[-2px] -top-[1px] -translate-x-0.5">{titleTwo}</span>
            </div>
        </div>
    )
}

export default CustomHeading
