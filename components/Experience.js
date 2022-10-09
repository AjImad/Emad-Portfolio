import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

//------------------------------------------------------

function Experience() {

    const contentExperienceCard = [
        {
            companyPicture: '/images/pull4you.png',
            titleJob: 'Front End Engineer',
            duration: 'Jul 2022 - Present · 4 mos',
            company: 'PULL4YOU SERVICES S.A.R.L · Internship',
            tools: [
                { imgSrc: '/images/skillsImgs/React.webp', title: 'React JS' },
                { imgSrc: '/images/skillsImgs/typescript.svg', title: 'Typescript' },
                { imgSrc: '/images/skillsImgs/redux.svg', title: 'Redux' },
                { imgSrc: '/images/skillsImgs/mui.svg', title: 'Material UI' },
                { imgSrc: '/images/skillsImgs/github.svg', title: 'Github' },
                { imgSrc: '/images/skillsImgs/git.svg', title: 'Git' },
                { imgSrc: '/images/skillsImgs/trello.svg', title: 'Trello' },
            ],
            description: {},
        },
        {
            companyPicture: '/images/sie.jfif',
            titleJob: 'Full-stack Developer - Stage PFE',
            duration: 'May 2021 - Jun 2021 · 2 mos',
            company: 'SIE Grupo · Internship',
            tools: [
                { imgSrc: '/images/skillsImgs/html.svg', title: 'HTML' },
                { imgSrc: '/images/skillsImgs/css.svg', title: 'CSS' },
                { imgSrc: '/images/skillsImgs/javascriptl.svg', title: 'Javascript' },
                { imgSrc: '/images/skillsImgs/jquery.svg', title: 'JQuery' },
                { imgSrc: '/images/skillsImgs/bootstrap.svg', title: 'Bootstrap' },
                { imgSrc: '/images/skillsImgs/php.svg', title: 'PHP' },
                { imgSrc: '/images/skillsImgs/github.svg', title: 'Github' },
                { imgSrc: '/images/skillsImgs/git.svg', title: 'Git' },
            ],
            description: {},
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
            className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row mx-auto max-w-full px-10 xs:space-y-32 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-2xl z=10'>
                experience
            </h3>

            <div className='w-full flex space-x-5 md:justify-center overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#c5ac8f] dark:scrollbar-thumb-orange-300 scrollbar-track-gray-400/20'>
                {
                    contentExperienceCard.map((content, index) => (
                        <ExperienceCard ExperienceContent={content} key={index} />
                    ))
                }
            </div>

        </motion.div>
    )
}

export default Experience