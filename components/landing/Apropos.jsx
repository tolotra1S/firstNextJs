import React from 'react'
import startUpImg from '../../public/images/startup.png'
import Image from 'next/image'

const Apropos = () => {
  return (
    <section id="apropos" className='md:h-screen md:px-7 md:items-center md:justify-center md:grid md:grid-cols-2 md:mx-auto md:gap-7'>
      <div className='hidden md:block'>
          <Image src={startUpImg} alt="startup" className='object-cover w-full drop-shadow-md'/>
        </div>
        <div className='flex flex-col p-3 gap-3'>
          <h1 className='text-4xl font-semibold text-primary'>Apropos</h1>
          <p className='text-xl md:text-lg'>
            Akademika est une plateforme de mise en relation entre tuteurs, élèves et individus, destinée à faciliter la recherche de cours ou de formation.
          </p>
          <p className='text-xl md:text-lg'>
            Nous avons pour objectif de référencer différents professeurs,étudiants, autodidacte c'est-à-dire que toute personne ayant des connaissances à partager seront les
  bienvenues.
          </p>
        </div>
    </section>
  )
}

export default Apropos
