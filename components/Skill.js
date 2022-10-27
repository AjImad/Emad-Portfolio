import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

//------------------------------------------------------

function Skill({ skillsImages }) {
    return (
        <div className='group relative flex cursor-pointer'>

            <motion.div
                initial={{
                    x: skillsImages.directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="flex justify-center items-center rounded-full border p-3 border-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
            >
                <Image
                    src={skillsImages.src}
                    width='100%'
                    height='100%'
                />
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-lg font-bold text-black opacity-100'>{skillsImages.rate}</p>
                </div>
            </div>

        </div >
    )
}

export default Skill