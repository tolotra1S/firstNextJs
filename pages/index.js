import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Mentors from '@/components/landing/Mentors'
import Tarifs from '@/components/landing/Tarifs'
import Apropos from '@/components/landing/Apropos'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/landing/Footer'
import ScrollToTop from '@/components/landing/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Akademika</title>
        <meta name="description" content="Akademika mg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Mentors />
      <Tarifs />
      <Apropos />
      <Contact />
      <Footer />
    </>
  )
}
