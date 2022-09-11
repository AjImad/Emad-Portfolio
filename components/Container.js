import React from 'react';
import { RoughNotation } from 'react-rough-notation';

function Container({ currentTheme }) {
    return (
        <section className='mt-5 flex flex-row justify-between items-start'>
            <div className='lg:w-2/3 py-12'>
                <h1 className=' text-xl md:text-2xl font-bold font-customFont'>
                    Hey There! I'm{" "}
                    <RoughNotation
                        type='highlight'
                        show={true}
                        color={currentTheme === 'dark' ? '#fe8768' : '#84cdec'}
                        animationDuration={1200}>
                        Emad AJBAR
                    </RoughNotation>
                    . Front End Developer.
                </h1>
                <p className='text-sm  mt-4 leading-normal md:leading-loose  md:text-base text-justify font-normal '>
                    I am 23 years old from Morocco. My mission is to scale up your Web
                    presence with high problem-solving skills and a huge passion for
                    design. User interfaces with meaningful UX are what I strongly
                    master!
                </p>
            </div>
            <div className='w-[30%] h-[30%]'>
                <img className='max-w' src={`/images/new.png`} />

                {/* {
                    currentTheme === 'dark' ?
                        <img className='max-w-[100%] border' src={`/images/avatar-dark.jpg`} />
                        :
                        <img className='max-w-[100%] border' src={`/images/avatar.jpg`} />
                } */}
            </div>
        </section>
    );
}

export default Container