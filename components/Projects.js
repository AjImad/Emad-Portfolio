import React from 'react'
import { motion } from 'framer-motion'

//------------------------------------------------------

function Projects() {

    const projects = [1, 2, 3, 4]

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-col md:flex-row justify-evenly items-center overflow-hidden h-screen relative text-left mx-auto max-w-full px-10 z-0'
        >
            <h3 className='absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {
                    projects.map((project, index) => (
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen'>
                            <img
                                src='./images/cloneDisney.png'
                                alt='google-clone'
                                className='w-auto h-auto xs:w-auto xs:h-80'
                            />
                            <div>
                                <h4 className='text-xl xs:text-2xl font-semibold text-center'>
                                    <span className='underline decoration-[#88ccca] dark:decoration-orange-300/30'>
                                        Case Study {index + 1} of {projects.length}:
                                    </span>{" "}
                                    Disney Clone
                                </h4>

                                <p></p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='absolute top-[30%] w-full h-[300px] bg-[#9c8c7a]/20 dark:bg-orange-300/10 -skew-y-12' />
        </motion.div>
    )
}

export default Projects