import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

//------------------------------------------------------

function ExperienceCard() {
    return (
        <article
            className='flex flex-col rounded-lg p-10 md:py-7 items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[450px] snap-start bg-[#9c8c7a] shadow-lg shadow-[#9c8c7a] dark:shadow-inherit text-white dark:bg-[#292929]'
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
                <h4 className='text-xl font-light'>Front End Engineer</h4>
                <p className='font-medium text-sm mt-2'>PULL4YOU SERVICES S.A.R.L · Internship</p>
                <div className='flex flex-row space-x-3 my-2'>
                    <img src='/images/skillsImgs/React.webp' title='React JS' className='w-7 h-7' />
                    <img src='/images/skillsImgs/typescript.svg' title='Typescript' className='w-7 h-7' />
                    <img src='/images/skillsImgs/redux.svg' title='Redux' className='w-7 h-7' />
                    <img src='/images/skillsImgs/mui.svg' title='Material UI' className='w-7 h-7' />
                    <img src='/images/skillsImgs/github.svg' title='Github' className='w-7 h-7' />
                    <img src='/images/skillsImgs/git.svg' title='Git' className='w-7 h-7' />
                    <img src='/images/skillsImgs/trello.svg' title='Trello' className='w-7 h-7' />
                </div>
                <p className='uppercase py-1 text-gray-200 dark:text-gray-500'>Jul 2022 - Present · 4 mos</p>
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