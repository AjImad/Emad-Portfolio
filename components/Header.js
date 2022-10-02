import React, { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { BeakerIcon } from '@heroicons/react/24/outline'
import {
    BrandGithub,
    BrandLinkedin,
    SunHigh,
    MoonStars,
    MailForward,
} from 'tabler-icons-react';
import { useTheme } from 'next-themes';
import useSound from 'use-sound';
import Link from 'next/link';

function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [play] = useSound('/audios/lightswitch.mp3', {
        volume: 0.4,
        sprite: {
            on: [0, 300],
            off: [300, 500],
        }
    })
    useEffect(() => {
        setMounted(true);
    }, [])
    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunHigh
                    role='button'
                    onClick={() => { setTheme('light'); play({ id: 'on' }) }}
                    className='bg-blue-100 rounded-lg p-1 dark:bg-orange-300 flex items-center justify-center hover:ring-2 ring-orange-300 transition-all duration-300 focus:outline-none'
                />

            )
        } else {
            return (
                <MoonStars
                    role='button'
                    onClick={() => { setTheme('dark'); play({ id: 'off' }) }}
                    className='bg-[#88ccca] rounded-lg p-1 dark:bg-slate-800 flex items-center justify-center hover:ring-2
                    ring-[#88ccca] transition-all duration-300 focus:outline-none'
                />
            )
        }
    }

    return (
        <header className='sticky top-0 p-5 px-10 flex items-center justify-between max-w-4xl mx-auto z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >
                <img
                    className='w-14 h-14 lg:w-11 lg:h-11 rounded-full'
                    src='/images/logo.png'
                    alt='Emad Code Logo'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center space-x-2'
            >
                {renderThemeChanger()}
                <Link href="https://www.linkedin.com/in/imad-ajbar-09a77720b/" target="_blank">
                    <BrandLinkedin className='cursor-pointer' />
                </Link>
                <Link href="https://github.com/AjImad" target="_blank">
                    <BrandGithub className='cursor-pointer' />
                </Link>
                <Link href="" target="_blank">
                    <MailForward className='cursor-pointer' />
                </Link>
            </motion.div>
        </header>
    )
}

export default Header