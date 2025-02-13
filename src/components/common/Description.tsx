import React from 'react'

interface DescriptionProps {
    title: string,
    CustomStyle?: string,
}

const Description: React.FC<DescriptionProps> = ({ title, CustomStyle, }) => {
    return (
        <div>
            <p className={`${CustomStyle} text-base !tracking-[6%]`}>{title}</p>
        </div>
    )
}

export default Description
