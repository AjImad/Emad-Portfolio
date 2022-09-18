import React from 'react'
import Typewriter from "typewriter-effect";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

function Hero() {
    return (
        <div className='h-screen flex flex-col space-y-15 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src="/images/me1.jpeg"
                alt="Hero Picture"
                width={150}
                height={150}
                className="relative rounded-full mx-auto object-cover"
            />
            <div className='mt-5 z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                    Software Enginner
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className="text-[#88ccca] dark:text-orange-300">
                        <Typewriter
                            options={{
                                strings: [
                                    "Hey There! 👋",
                                    "The Name's Emad AJBAR",
                                    "Software Engineering",
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
                    <Link href="#project">
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