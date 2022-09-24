import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

function Experience() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row mx-auto max-w-full px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-500 text-2xl'>
                experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </motion.div>
    )
}

export default Experience