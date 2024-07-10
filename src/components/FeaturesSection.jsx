import React from 'react'
import { features } from '../constants/index'

const FeaturesSection = ({ id }) => {
    return (
        <div className="relative mt-20 border-b-0 border-neutral-800 min-h-[800px]" id={id}>
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-sm h-6 text-md font-medium px-2 py-1 uppercase">Feature</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wider">Step Into a
                    <span className="bg-gradient-to-l from-orange-500 to-orange-700 bg-clip-text text-transparent font-semibold"> New Reality.</span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20 mx-2">
                {
                    features.map((feature, index) => (
                        <div key={index} className='w-full lg:w-1/3 sm:w-1/2'>
                            <div className='flex mt-12 transistion duration-200 p-2 space-x-0 border mx-1 pt-10 pb-0 rounded-md hover:shadow-orange-900 hover:shadow-lg border-neutral-700 border-[2px] transition-colors-1s  hover:scale-[1.1] hover:bg-neutral-900 hover:border-orange-500 '>
                                <div className="flex mx-6 h-10 w-10 p-2 rounded-full bg-neutral-900 text-orange-700 justify-center items-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                    <p className='text-md p-2 mb-14 text-neutral-600'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>

    )
}

export default FeaturesSection