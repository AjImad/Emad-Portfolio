import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
// Icons
import {
    BrandGithub,
    BrandLinkedin,
    SunHigh,
    MoonStars,
} from 'tabler-icons-react';
//------------------------------------------------------


const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

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
                    onClick={() => setTheme('light')}
                    className='bg-blue-100 rounded-lg p-1 dark:bg-orange-300 flex items-center justify-center hover:ring-2 ring-orange-300 transition-all duration-300 focus:outline-none'
                />
            )
        } else {
            return (
                <MoonStars
                    role='button'
                    onClick={() => setTheme('dark')}
                    className='bg-blue-400 rounded-lg p-1 dark:bg-slate-800 flex items-center justify-center hover:ring-2
                    ring-blue-400 transition-all duration-300 focus:outline-none'
                />
            )
        }
    }

    return (
        <div className='flex justify-between items-center my-4'>
            <img
                className='w-[75px] h-[75px] rounded-full'
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