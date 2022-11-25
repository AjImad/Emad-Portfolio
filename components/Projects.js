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
            <h3 className='absolute top-20 tracking-[12px] uppercase text-gray-700 dark:text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thumb-[#c5ac8f] dark:scrollbar-thumb-orange-300 scrollbar-track-gray-400/20 z-20'>
                {/* {
                    projects.map((project, index) => ( */}
                <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen'>
                    <motion.a href='https://disneyplus-clone-7ba28.web.app/' target='_blank'
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                    >
                        <img
                            src='./images/projectsImg/cloneDisney.png'
                            alt='disney-clone'
                            className='w-auto h-auto xs:w-auto xs:h-64 xs:mt-28'
                        />
                    </motion.a>
                    <div className='flex flex-col space-y-5'>
                        <a href='https://disneyplus-clone-7ba28.web.app/' target='_blank'>
                            <h4 className='text-xl xs:text-2xl font-semibold text-center space-y-3'>
                                <span className='underline decoration-[#88ccca] dark:decoration-orange-300/30'>
                                    Case Study 1 of 2:
                                </span>{" "}
                                Disney Clone
                            </h4>
                            <div className='flex flex-row space-x-3 justify-center items-center mt-5'>
                                <img src='/images/skillsImgs/React.webp' title='React Js' className='w-7 h-7' />
                                <img src='/images/skillsImgs/javascriptl.svg' title='Javascript' className='w-7 h-7' />
                                <img src='/images/skillsImgs/redux.svg' title='Redux' className='w-7 h-7' />
                                <img src='/images/skillsImgs/firebase.svg' title='Firebase' className='w-7 h-7' />
                                <img src='/images/skillsImgs/git.svg' title='Git' className='w-7 h-7' />
                                <img src='/images/skillsImgs/github.svg' title='Github' className='w-7 h-7' />
                            </div>
                        </a>

                        <p className='text-justify md:text-center text-lg'>
                            Diseny 2.0 app that has a Log In and Log Out Authentication with google using Firebase authentication. It has a beautiful Home Screen with all the movies looking just Like Diseny.
                        </p>
                    </div>
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen'>
                    <motion.a href='https://olinestore-80cfa.web.app/' target='_blank'
                        initial={{
                            opacity: 0,
                            y: -100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.5
                        }}
                    >
                        <img
                            src='./images/projectsImg/onlineStore.png'
                            alt='onlineStore'
                            className='w-auto h-auto xs:w-auto xs:h-64 xs:mt-28'
                        />
                    </motion.a>
                    <div className='flex flex-col space-y-5'>
                        <a href='https://olinestore-80cfa.web.app/' target='_blank'>
                            <h4 className='text-xl xs:text-2xl font-semibold text-center space-y-3'>
                                <span className='underline decoration-[#88ccca] dark:decoration-orange-300/30'>
                                    Case Study 2 of 2:
                                </span>{" "}
                                eCommerce Store
                            </h4>
                            <div className='flex flex-row space-x-3 justify-center items-center mt-5'>
                                <img src='/images/skillsImgs/React.webp' title='React Js' className='w-7 h-7' />
                                <img src='/images/skillsImgs/javascriptl.svg' title='Javascript' className='w-7 h-7' />
                                <img src='/images/skillsImgs/mui.svg' title='Material UI' className='w-7 h-7' />
                                <img src='/images/skillsImgs/redux.svg' title='Redux' className='w-7 h-7' />
                                <img src='/images/skillsImgs/firebase.svg' title='Firebase' className='w-7 h-7' />
                                <img src='/images/skillsImgs/git.svg' title='Git' className='w-7 h-7' />
                                <img src='/images/skillsImgs/github.svg' title='Github' className='w-7 h-7' />
                            </div>
                        </a>

                        <p className='text-justify md:text-center text-lg'>
                            I built an eCommerce store that is a web app that has a Log In and Log Out Authentification with Google or Facebook, that I built from scratch, and actually it was a challenge for me to implement all the stuff that I've learned.
                        </p>
                    </div>
                </div>

            </div>

            <div className='absolute top-[30%] w-full h-[300px] bg-[#9c8c7a]/20 dark:bg-orange-300/10 -skew-y-12' />
        </motion.div>
    )
}

export default Projects