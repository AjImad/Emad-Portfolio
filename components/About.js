import React from 'react';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';
import Typewriter from "typewriter-effect";
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
        <section className='mt-5 flex flex-row justify-between items-start'>
            <div className='w-[25%] h-[25%]'>
                <img className={`max-w rounded-t-xl rounded-b-xl`} src={`/images/me2.jpeg`} />
            </div>
            <div className='lg:w-2/3 py-12'>
                <h1 className=' text-xl md:text-3xl leading-normal md:leading-loose font-bold font-customFont'>
                    Hey There !
                    <WavingHand />
                    {" "}I'm{" "}
                    <RoughNotation
                        type='highlight'
                        show={true}
                        color={currentTheme === 'dark' ? '#fdba74' : '#84cdec'}
                        animationDuration={1200}>
                        Emad AJBAR
                    </RoughNotation>
                    .
                    <span className={`${currentTheme === 'dark' ? 'text-orange-300' : 'text-[#84cdec]'}`}>
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Developer",
                                    "Front End Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h1>
                <p className='text-sm  mt-4 leading-normal md:leading-loose  md:text-base text-justify font-normal '>
                    I am 23 years old from Morocco. My mission is to scale up your Web
                    presence with high problem-solving skills and a huge passion for
                    design. User interfaces with meaningful UX are what I strongly
                    master!
                </p>
            </div>
        </section>
    );
}

export default About