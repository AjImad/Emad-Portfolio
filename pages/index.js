import Head from 'next/head'
import { motion } from 'framer-motion'
// components
import Navbar from '../components/Navbar'

//------------------------------------------------------

export default function Home() {
  return (
    <motion.div className=' flex flex-col max-w-[900px] mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/webicon.svg" />
      </Head>
      {/* Navbar */}
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className=''>
          <h1 className="text-3xl font-bold">
            Hello world!
          </h1>
        </div>
      </main>
    </motion.div >
  )
}
