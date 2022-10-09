import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

//------------------------------------------------------

function ExperienceCard({ ExperienceContent, key }) {
    return (
        <article
            key={key}
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
                className="w-10 h-10 rounded-full"
            >
                <Image
                    src={ExperienceContent.companyPicture}
                    alt="FST TANGER"
                    width="100%"
                    height="100%"
                    className='object-fit object-center'
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-xl font-light'>{ExperienceContent.titleJob}</h4>
                <p className='font-medium text-sm mt-2'>{ExperienceContent.company}</p>
                <div className='flex flex-row space-x-3 my-2'>
                    {
                        ExperienceContent.tools.map((image, index) => (
                            <img src={image.imgSrc} title={image.title} className='w-7 h-7' />
                        ))
                    }
                </div>
                <p className='uppercase py-1 text-gray-200 dark:text-gray-500'>{ExperienceContent.duration}</p>
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