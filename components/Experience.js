import { motion } from 'framer-motion';
import React from 'react';
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
            className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row mx-auto max-w-full px-10 xs:space-y-32 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-2xl z=10'>
                experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#c4acec] dark:scrollbar-thumb-orange-300 scrollbar-track-gray-400/20'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </motion.div>
    )
}

export default Experience