import React from 'react'
import TutorCard from './TutorCard'
import Link from 'next/link'

const Mentors = () => {
  return (
    <section id='mentorat' className='md:h-screen md:flex md:flex-col md:justify-center md:items-center md:gap-3'>
      <div className='p-3 md:px-24'>
        <h1 className='text-4xl font-semibold text-primary'>Trouver un mentor.</h1>
        <p>Retrouver des personnes qui pourraient vous aidez dans vos études, mais aussi dans l'acquisiton de nouvelle connaissance.</p>
      </div>
      <div className='space-y-3 p-3 md:grid md:grid-cols-3 md:space-y-0 md:gap-5 md:px-24'>
        <TutorCard />
        <TutorCard />
        <TutorCard />
      </div>
      <div className='p-3'>
        <Link href="/tutor/" className='rounded-lg shadow-md font-semibold text-lg py-2 px-7 bg-primary text-white hover:bg-secondary'>Voir plus</Link>
      </div>
    </section>
  )
}

export default Mentors
