import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast, Toaster } from 'react-hot-toast';
import { init, sendForm } from 'emailjs-com';
init('eP0HjPOh2MnotplIN');

//------------------------------------------------------

function ContactMe() {

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        message: yup.string(),
    })

    // const defaultValues = {
    //     firstName: 'imad',
    //     lastName: 'ajbar',
    //     email: 'ajbimd.hxh@gmail.com',
    //     text_message: 'Hey There...'
    // }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const sendEmail = async () => {
        const sending = toast.loading('Sending...')
        await sendForm('gmail_contact', 'template_bucs0go', '#contact-form')
            .then(function (response) {
                toast.success('Sent Successfully', { id: sending });
                reset();
            }, function (error) {
                toast.error(`Failed! please try again`, { is: sending })
            })
    }

    const onSubmit = (data) => {
        sendEmail();
    }


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
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h3 className='text-2xl absolute top-24 tracking-[12px] uppercase text-gray-700 dark:text-gray-500'>Contact</h3>

            <div className='flex flex-col space-y-5 xs:mt-32'>
                <h4 className='text-xl sm:text-2xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#88ccca] dark:decoration-orange-300/90 underline'>Lets Talk.</span>
                </h4>

                <div className='space-y-3'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#88ccca] dark:text-orange-300 h-6 w-6 animate-pulse' />
                        <p className='text-lg'>+212657709009</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#88ccca] dark:text-orange-300 h-6 w-6 animate-pulse' />
                        <p>ajbar.imad.99@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#88ccca] dark:text-orange-300 h-6 w-6 animate-pulse' />
                        <p>Morocco, Tangier</p>
                    </div>
                </div>

                <form id="contact-form" className='flex flex-col space-y-3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col xs:flex-row xs:space-x-2 space-y-3 xs:space-y-0'>
                        <input name='firstName' {...register('firstName')}
                            placeholder='First Name*'
                            type='text'
                            className={`contactInput xs:px-6 ${errors?.firstName?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                        />
                        <input name='lastName' {...register('lastName')}
                            placeholder='last Name*'
                            type='text'
                            className={`contactInput xs:px-6 ${errors?.lastName?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                        />
                    </div>
                    <input name='email' {...register('email')}
                        placeholder='email*'
                        type='text'
                        className={`contactInput xs:px-6 ${errors?.email?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                    />
                    <textarea
                        name='message'
                        {...register('message')}
                        type='text'
                        placeholder='Your Message*'
                        className={`contactInput xs:px-6 border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca] `}
                    />
                    {/* <div className='flex flex-col xs:flex-row xs:space-x-2 space-y-3 xs:space-y-0'>
                        <input name='firstName' {...register('firstName')}
                            className={`contactInput xs:px-6 ${errors?.firstName?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                            type='text'
                            placeholder='First Name...*'
                        />

                        <input name='lastName' {...register('lastName')}
                            className={`contactInput xs:px-6 ${errors?.lastName?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                            type='text' placeholder='Last Name...*'
                        />

                    </div>
                    <input name='email' type='email' {...register('email')}
                        className={`contactInput xs:px-6 ${errors?.email?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                        placeholder='example@example.com...*' />
                    <input
                        name='text_message' {...register('text_message')}
                        className={`contactInput xs:px-6 ${errors?.text_message?.message ? 'border-b-2 border-red-500' : 'border-b-2 border-gray-500 dark:border-gray-300 dark:focus:border-orange-300 focus:border-[#88ccca]'} `}
                        placeholder='Your Message...'
                    /> */}

                    <button type='sumbit' className='cursor-pointers space-y-4 bg-[#88ccca] shadow-lg shadow-[#88ccca]/50 dark:bg-orange-300 dark:shadow-orange-300/50 text-white font- py-3 rounded-lg'>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default ContactMe;