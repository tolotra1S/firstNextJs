import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdStarRate} from 'react-icons/md'

import TutorImg from '../../public/images/profile/mcCarty.jpeg'

const TutorCard = () => {
  return (
    <div className='w-full max-w-sm rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer'>
        <Link href="#" className='relative'>
            <Image src={TutorImg} alt="akademika tutor" className='rounded-t-lg' />
            <div className='absolute bottom-2 left-2 bg-primary/60 text-white backdrop-blur-md py-1 px-4 rounded-xl'>
                <h3 className='text-xl font-semibold'>Steve Randria</h3>
                <p className='text-md font-semibold'>Mathematiques</p>
            </div>
        </Link>

        <div className='flex flex-col p-3 gap-5'>
            <div>
                <p>
                    B.Sc Mathematics & Computer Science. Full time Mathematics Teacher
                </p>
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='flex gap-1 items-center bg-secondary/30 py-1 px-3 rounded-xl font-semibold shadow-sm'>
                    <MdStarRate size={20} />
                    <span>5</span>
                    <span>(16 avis)</span>
                </h3>
                <h3 className='bg-primary/30 py-1 px-3 rounded-xl font-semibold shadow-sm'>
                    5000 Ar/h
                </h3>
            </div>
        </div>
        
    </div>
  )
}

export default TutorCard
