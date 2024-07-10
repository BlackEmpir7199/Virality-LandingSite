import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-600 '>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:ml-36 sm:ml-0">
                <div>
                    <h3 className="text-lg font-semibold mb-1">Resources</h3>
                    <ul>
                        {
                            resourcesLinks.map((link, index) => (
                                <li key={index} className='mb-2'>
                                    <a className='text-neutral-300 hover:text-orange-600' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">Platform</h3>
                    <ul>
                        {
                            platformLinks.map((link, index) => (
                                <li key={index} className='mb-2'>
                                    <a className='text-neutral-300 hover:text-orange-600' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">Community</h3>
                    <ul>
                        {
                            communityLinks.map((link, index) => (
                                <li key={index} className='mb-2'>
                                    <a className='text-neutral-300 hover:text-orange-600' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer