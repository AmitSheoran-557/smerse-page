import React from 'react'
import CustomHeading from './common/CustomHeading'

const GameFi = () => {
    return (
        <div>
            <div className='bg-blue w-full lg:pb-[160px] md:pb-[140px] pb-[67px]' id='vision'>
                <div className="container mx-auto flex justify-center items-center flex-col">
                    <div className="flex flex-wrap w-full">
                        <div className="w-6/12">
                            <img className='max-w-[505px] w-full' src="/assets/images/webp/game-fi-img.webp" alt="game-fi-circle-img" />
                        </div>
                        <div className="w-6/12">
                            <CustomHeading title='Game-Fi' titleTwo='Game-Fi'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameFi
