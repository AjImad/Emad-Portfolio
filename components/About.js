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

            <h3 className='absolute top-24 uppercase tracking-[12px] text-gray-700 dark:text-gray-500 text-2xl'>
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
                src='/images/Aboutme.jpeg'
                className="mt-32 md:mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-top object-cover
                md:rounded-t-xl md:rounded-b-xl md:h-[330px] md:w-64 "
            />
            <div className='flex flex-col px-0 mt-10 md:px-5'>
                <h4 className='text-2xl md:text-2xl font-light uppercase'>
                    Here is a <span className='underline dark:decoration-orange-300 decoration-[#88ccca]'>Little</span> Background
                </h4>
                <p className='text-lg mt-5 font-thin leading-relaxed tracking-wide'>
                    Hi there, if you're wondering who is the person behind this amazing work, this section is made just for you,  let me first introduce myself, i'm AJBAR Imad your new friend based on Tangier Morocco, a 23 years old master's degree student in his graduation year, a human that  love to talk and interact with other people.
                    I am passionate about learning new technology, creating projects, and looking after new challenges.
                    A programming enthusiast, books lover, gym rat and of course a coffee lover.
                </p>
            </div>
        </motion.div>
    );
}

export default About