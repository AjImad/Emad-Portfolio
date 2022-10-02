import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

//------------------------------------------------------

function Skill({ directionLeft }) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex justify-center items-center rounded-full border border-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
            >
                <Image
                    src="/images/js.png"
                    width='60%'
                    height='50%'
                />
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-lg font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill