import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = ({id}) => {
  return (
    <div className="mt-12" id={id}>
         <h2 className="text-3xl sm:text-5xl text-center mt-6 mb-6 tracking-wide">
            Affordable 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-semibold"> Pricing Plans. </span>
        </h2>
        <div className="flex flex-wrap">
            {
                pricingOptions.map((option,index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl'> (Most Popular) </span>}
                            </p>
                            <p className='mb-8'>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-neutral-500 tracking-tight'>/Month</span>
                            </p>
                            <ul>
                                {
                                    option.features.map((feature,index)=>(
                                        <li key={index} className="mt-8 flex items-center">
                                           <CheckCircle2/>
                                           <span className='ml-3'>{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:shadow-[-12px_-8px_18px_1px] hover:bg-neutral-800 hover:shadow-orange-600 shadow-[12px_8px_18px_1px] shadow-orange-600  border border-orange-700 rounded-lg transition duration-1000 '>
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing