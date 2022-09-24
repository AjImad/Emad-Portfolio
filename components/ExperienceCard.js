import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

function ExperienceCard() {
    return (
        <article
            className='flex flex-col rounded-lg p-10 md:py-7 items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[800px] snap-start bg-[#88ccca] shadow-lg shadow-[#88ccca]/50 dark:shadow-inherit text-white dark:bg-[#292929]'
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
                <h4 className='text-2xl font-light'>Master Degree</h4>
                <p className='font-medium text-lg mt-2'>System informatique et Mobile</p>
                <p className='uppercase py-3 text-gray-200 dark:text-gray-500'>Started work... - Ended ...</p>
                <ul className='list-disc space-y-4 ml-5 text-sm '>
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