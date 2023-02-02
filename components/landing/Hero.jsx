import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HeroImg from '../../public/images/hero.png'

const Hero = () => {
  return (
    <section className='container md:mx-auto flex flex-col p-3 space-y-3 md:grid-cols-2 md:grid md:gap-3 md:items-center md:justify-center md:h-screen md:px-7'>
      <div className='space-y-3'>
        <h1 className='text-primary text-5xl font-semibold'>Partager vos connaissance.</h1>
        <div className='space-y-3'>
          <p className='text-lg'>
            Que vous soyez à la recherche d'une formation ou ayez une offre à partager,
            Akademika vous assiste et répond à vos besoins
            <br />
          </p>
          <br />
          <Link href="/tutor" className='text-white font-semibold text-md bg-primary py-2 px-5 rounded-lg hover:bg-secondary transition delay-100 duration-250 ease-in-out'>Commencez!</Link>
        </div>
      </div>
      <div className='z-2'>
        <Image src={HeroImg} alt="akademika-mg" className='md:h-[550px] md:object-contain drop-shadow-md'/>
      </div>
    </section>
  )
}

export default Hero
