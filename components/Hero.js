import React from 'react'
import Typewriter from "typewriter-effect";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

//------------------------------------------------------

function Hero() {
    return (
        <div className='h-screen flex flex-col space-y-15 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />

            <img
                src="/images/hero.png"
                alt="Hero Picture"
                // width={140}
                // height={140}
                className="relative rounded-full mx-auto object-cover object-top w-28 h-28 md:w-40 md:h-40"
            />
            <div className='mt-10 z-20 space-y-2'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                    Software Engineer
                </h2>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
                    <span className="text-[#88ccca] dark:text-orange-300">
                        <Typewriter
                            options={{
                                strings: [
                                    "Hey There! 👋",
                                    "Emad AJBAR",
                                    "Software Engineer",
                                    "Front End Developer"
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                // delay: 100,
                            }}
                        />
                    </span>
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button
                            className='heroButton
                             border dark:border-[#242424] dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]/40
                                    border-[#f0e7db] hover:border-[#88ccca] hover:text-[#88ccca]
                             '
                        >
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button
                            className='heroButton
                             border dark:border-[#242424] dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]/40
                                    border-[#f0e7db] hover:border-[#88ccca] hover:text-[#88ccca]
                             '
                        >
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button
                            className='heroButton
                             border dark:border-[#242424] dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]/40
                                    border-[#f0e7db] hover:border-[#88ccca] hover:text-[#88ccca]
                             '
                        >
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button
                            className='heroButton
                             border dark:border-[#242424] dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]/40
                                    border-[#f0e7db] hover:border-[#88ccca] hover:text-[#88ccca]
                             '
                        >
                            Projects

                        </button>
                    </Link>
                </div>
            </div>
            <div className='relative w-[100%]'>

                <div className='absolute top-24 md:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <button class="px-6 py-2 rounded-full border border-[#88ccca] text-[#88ccca]
                    hover:border-[#79B4B7] hover:text-[#79B4B7] dark:border-orange-300/60 dark:text-orange-300/60 uppercase
                    shadow-md dark:hover:border-orange-200 dark:hover:text-orange-200 hover:shadow-lg transition duration-150 ease-in-out
                    ">
                        <a
                            href="./cv.pdf"
                            alt="Download CV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center'
                        >
                            My Resume
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                class="w-3 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                </path>
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero