import React from 'react';
import { motion } from 'framer-motion';

//------------------------------------------------------

function ContactMe() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='h-screen relative flex flex-col md:flex-row text-center md:text-left justify-evenly items-center mx-w-4xl px-10 mx-auto'
        >
            <h3 className='text-2xl absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500'>Contact</h3>

            <div>
                <h4>
                    I have got just what you need.{" "}
                    <span>Lets Talk.</span>
                </h4>
            </div>
        </motion.div>
    )
}

export default ContactMe;