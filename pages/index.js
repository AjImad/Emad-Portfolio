import Head from 'next/head';
// components
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';
import BuyMeCoffe from '../components/BuyMeCoffe';

//------------------------------------------------------

export default function Home() {

  return (
    // <motion.div className='flex flex-col px-5 lg:px-0 max-w-[900px] mx-auto'>
    <div className='bg-[#f0e7db] text-gray-700 dark:bg-[#242424] dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z=0 scrollbar scrollbar-thumb-[#88ccca] dark:scrollbar-thumb-orange-300 scrollbar-track-gray-400/20'>
      <Head>
        <title>Emad Code | Front end Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/webicon.svg" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />


      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      {/* Project */}

      {/* Contact */}
      <section className='snap-center'>
        <ContactMe />
      </section>

      <BuyMeCoffe />

    </div>
    // {/* </motion.div > */ }
  )
}
