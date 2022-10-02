import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';

//------------------------------------------------------

function Skills() {
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
            className='flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] md:px-10 min-h-screen justify-center items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-2xl z=10'>
                skills
            </h3>

            <h3 className='absolute top-36 tracking-[3px] text-sm uppercase text-gray-700 dark:text-gray-500 z=10'>
                Hover over a skill for currency proficiency
            </h3>

            <div className=' grid grid-cols-4 gap-5 xs:mt-32'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>

        </motion.div>
    )
}

export default Skills