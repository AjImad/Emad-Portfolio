import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function BuyMeCoffe() {
    return (
        <div className='sticky bottom-7 w-full flex justify-end items-center  cursor-pointer'>
            <a href='#' target='_blank' className='group relative flex mr-12 filter grayscale hover:grayscale-0 duration-300'
                rel="noopener noreferrer"
            >
                <img
                    src='/images/buyCoffe.svg'
                    className='rounded-full h-10 w-10'
                />
                <motion.span
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: .3,
                    }}
                    className="absolute hidden group-hover:flex -left-12 -top-0 -translate-y-full w-48 px-2 py-1  rounded-xl text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 ">
                    <img src='/images/buyCoffeText.svg' className='w-30 h-10 rounded-sm' />
                </motion.span>
            </a>
        </div>
    )
}

export default BuyMeCoffe