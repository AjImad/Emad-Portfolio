import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

//------------------------------------------------------

function Experience() {

    const contentExperienceCard = [
        {
            companyPicture: '/images/pull4you.png',
            titleJob: 'Full Stack Developer',
            duration: 'FEB 2023 - JUL · 6 mos',
            company: 'PULL4YOU SERVICES S.A.R.L · Intern',
            tools: [
                { imgSrc: '/images/skillsImgs/React.webp', title: 'React JS' },
                { imgSrc: '/images/skillsImgs/typescript.svg', title: 'Typescript' },
                { imgSrc: '/images/skillsImgs/redux.svg', title: 'Redux' },
                { imgSrc: '/images/skillsImgs/mui.svg', title: 'Material UI' },
                { imgSrc: '/images/skillsImgs/github.svg', title: 'Github' },
                { imgSrc: '/images/skillsImgs/git.svg', title: 'Git' },
                { imgSrc: '/images/skillsImgs/trello.svg', title: 'Trello' },
                { imgSrc: '/images/skillsImgs/django.svg', title: 'Django' },
                { imgSrc: '/images/skillsImgs/pytest.png', title: 'Pytest' },
            ],
            description: [
                'Develop and maintain web applications',
                'Efficiently troubleshoot and debug issues',
                'Collaborate with diverse teams to implement new features and enhance existing ones',
                'CRUD Operation using Axios'
            ],
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
                { imgSrc: '/images/skillsImgs/sqlserver.svg', title: 'Sql Server' },
            ],
            description: [
                'Development a web application based on Desktop application',
                'Developing Web UI',
                'Developing Backend using Php Native',
                'creating Database using SqlServer'
            ],
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
            <h3 className='absolute top-24 md:top-20 tracking-[8px] sm:tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-xl md:text-2xl z=10'>
                experience
            </h3>

            <div className='w-full flex space-x-5 mt-10 md:mt-0 md:justify-center overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#c5ac8f] dark:scrollbar-thumb-orange-300 scrollbar-track-gray-400/20'>
                {
                    contentExperienceCard.map((content, index) => (
                        <ExperienceCard key={index} ExperienceContent={content} />
                    ))
                }
            </div>

        </motion.div>
    )
}

export default Experience