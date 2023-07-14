import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';

//------------------------------------------------------

function Skills() {

    const skillsImages = [
        {
            src: '/images/skillsImgs/React.webp',
            rate: '75%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/javascriptl.svg',
            rate: '79%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/nextjs.svg',
            rate: '65%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/typescript.svg',
            rate: '79%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/nodejs.svg',
            rate: '60%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/redux.svg',
            rate: '65%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/mui.svg',
            rate: '80%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/tailwindcss.svg',
            rate: '70%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/firebase.svg',
            rate: '60%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/html.svg',
            rate: '90%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/css.svg',
            rate: '85%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/git.svg',
            rate: '80%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/mysql.svg',
            rate: '60%',
            directionLeft: true,
        },
        {
            src: '/images/skillsImgs/python.svg',
            rate: '70%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/django.svg',
            rate: '60%',
            directionLeft: false,
        },
        {
            src: '/images/skillsImgs/pytest.png',
            rate: '60%',
            directionLeft: false,
        },
    ]

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
            <h3 className='absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-xl md:text-2xl z=10'>
                skills
            </h3>

            <h3 className='absolute top-44 md:top-40 tracking-[3px] text-xs uppercase text-gray-700 dark:text-gray-500 z=10'>
                Hover over a skill for current proficiency
            </h3>

            <div className=' grid grid-cols-4 gap-5 mt-16 md:mt-32'>
                {
                    skillsImages.map((skill, index) => (
                        <Skill key={index} skillsImages={skill} />
                    ))
                }
            </div>

        </motion.div>
    )
}

export default Skills