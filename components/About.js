import React from 'react';
import { motion } from 'framer-motion';

//------------------------------------------------------

function About({ currentTheme }) {

    const WavingHand = () => (
        <motion.div
            style={{
                marginBottom: '-20px',
                marginRight: '-45px',
                paddingBottom: '20px',
                paddingRight: '45px',
                display: 'inline-block',
            }}
            animate={{ rotate: 20 }}
            transition={{
                yoyo: Infinity,
                from: 0,
                duration: 0.3,
                ease: 'easeInOut',
                type: 'tween',
            }}
        >
            👋
        </motion.div>
    );
    return (
        <div className='flex flex-col relative h-screen  text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-500 text-2xl'>
                about
            </h3>
            <motion.img
                initial={{
                    x: -300,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                src='/images/me2.jpeg'
                className="-mb-20 md:mt-8 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-top object-cover
                md:rounded-t-xl md:rounded-b-xl md:h-[330px] md:w-64 "
            />
        </div>
    );
}

export default About