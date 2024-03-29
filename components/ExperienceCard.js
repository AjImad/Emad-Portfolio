import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

//------------------------------------------------------

function ExperienceCard({ ExperienceContent }) {
    return (
        <article
            className='flex flex-col rounded-lg p-10 md:py-17 items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[450px] snap-start bg-[#9c8c7a]/20 shadow-lg shadow-[#9c8c7a]/20 dark:shadow-inherit text-white dark:bg-[#292929]'
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
                className="w-20 h-20 rounded-full"
            >
                <Image
                    src={ExperienceContent.companyPicture}
                    alt="FST TANGER"
                    width="80%"
                    height="80%"
                    className='rounded-full object-cover object-center'
                />
            </motion.div>

            <div className='px-0 md:px-5'>
                <h4 className='text-xl font-light text-gray-700 dark:text-gray-100'>{ExperienceContent.titleJob}</h4>
                <p className='font-medium text-sm mt-2 text-gray-700 dark:text-gray-100'>{ExperienceContent.company}</p>
                <div className='flex flex-row space-x-3 my-3'>
                    {
                        ExperienceContent.tools.map((image, index) => (
                            <img key={index} src={image.imgSrc} title={image.title} className='w-7 h-7' />
                        ))
                    }
                </div>
                <p className='uppercase py-1 text-gray-400 dark:text-gray-500'>{ExperienceContent.duration}</p>
                <ul className='list-disc space-y-4 ml-5 text-sm text-gray-700 dark:text-gray-100 '>
                    {
                        ExperienceContent.description.map((desc, index) => (
                            <li key={index}>{desc}</li>

                        ))
                    }
                </ul>

            </div>
        </article>
    )
}

export default ExperienceCard