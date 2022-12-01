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
        </div>
    )
}

export default Hero