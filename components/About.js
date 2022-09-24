import React from 'react';
import { motion } from 'framer-motion';

//------------------------------------------------------

function About() {

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>

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
                className="mt-32 md:mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-top object-cover
                md:rounded-t-xl md:rounded-b-xl md:h-[330px] md:w-64 "
            />
            <div classname='flex flex-col px-0 mt-10 md:px-12'>
                <h4 className='text-2xl md:text-3xl font-semibold'>
                    Here is a <span className='underline dark:decoration-orange-300 decoration-[#88ccca]'>little</span> background
                </h4>
                <p className='text-sm mt-5'>
                    I am 23 years old from Morocco. My mission is to scale up your Web
                    presence with high problem-solving skills and a huge passion for
                    design. User interfaces with meaningful UX are what I strongly
                    master! I am 23 years old from Morocco. My mission is to scale up your Web
                    presence with high problem-solving skills and a huge passion for
                    design. User interfaces with meaningful UX are what I strongly
                    master! I am 23 years old from Morocco. My mission is to scale up your Web
                    presence with high problem-solving skills and a huge passion for
                    design. User interfaces with meaningful UX are what I strongly
                    master!
                </p>
            </div>
        </motion.div>
    );
}

export default About