import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

function ExperienceCard() {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center'
        >
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2
                }}
            >
                <Image
                    src="/images/fst.png"
                    alt="FST TANGER"
                    width="167px"
                    height="80px"
                    className='rounded-full object-cover object-center'
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Master Degree</h4>
                <p className='font-bold text-2xl mt-2'>System informatique et Mobile</p>
                <p className='uppercase py-5 text-gray-500'>Started work... - Ended ...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summery Points</li>
                    <li>Summery Points</li>
                    <li>Summery Points</li>
                    <li>Summery Points</li>
                </ul>

            </div>
        </article>
    )
}

export default ExperienceCard