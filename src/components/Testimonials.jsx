import React from 'react'
import { testimonials } from '../constants'

const Testimonials = ({ id }) => {
    return (
        <div className="mt-20 tracking-wide" id={id}>
            <h2 className="text-3xl sm:text-5xl text-center mt-6 mb-6 tracking-wide">
                Check Our
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-semibold"> Users Testimonials.</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonials, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 hover:border-orange-600  font-thin hover:scale-[1.2] hover:backdrop-blur-2xl transistion duration-300">
                            <p>{testimonials.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonials.image} alt="Testimonial" className='w-12 h-12 rounded-full border border-neutral-400' />
                                <div className='mx-3'>
                                    <h6 className='font-light'>{testimonials.user}</h6>
                                    <span className='text-sm font-normal italic text-neutral-600'>{testimonials.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimonials