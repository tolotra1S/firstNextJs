import React from 'react'
import Image from 'next/image'

const CardTarifs = ({title, description, imgSrc}) => {
  return (
    <div className='h-[300px] grid grid-rows-2 justify-center items-center'>
      <div>
        <Image src={imgSrc} className="h-[150px] object-contain drop-shadow-md" alt="akademika tarifs"/>
      </div>
      <div className='text-center'>
        <h3 className='text-primary text-3xl'>{title}</h3>
        <p className='text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default CardTarifs
