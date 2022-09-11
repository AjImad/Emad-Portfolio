import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import useSound from 'use-sound';
// Icons
import {
    BrandGithub,
    BrandLinkedin,
    SunHigh,
    MoonStars,
} from 'tabler-icons-react';
//------------------------------------------------------


const Navbar = ({ handleCurrentTheme }) => {
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
                    onClick={() => { setTheme('light'); handleCurrentTheme('light'); play({ id: 'on' }) }}
                    className='bg-blue-100 rounded-lg p-1 dark:bg-orange-300 flex items-center justify-center hover:ring-2 ring-orange-300 transition-all duration-300 focus:outline-none'
                />
            )
        } else {
            return (
                <MoonStars
                    role='button'
                    onClick={() => { setTheme('dark'); handleCurrentTheme('dark'); play({ id: 'off' }) }}
                    className='bg-[#84cdec] rounded-lg p-1 dark:bg-slate-800 flex items-center justify-center hover:ring-2
                    ring-[#84cdec] transition-all duration-300 focus:outline-none'
                />
            )
        }
    }

    return (
        <div className='flex justify-between items-center my-4'>
            <img
                className='w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] rounded-full'
                src='/images/logo.png'
                alt='Emad Code Logo'
            />
            <div className='flex space-x-2 '>
                {renderThemeChanger()}
                <BrandLinkedin />
                <BrandGithub />
            </div>
        </div>
    )
};

export default Navbar;