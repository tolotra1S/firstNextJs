import React from 'react'
import Image from 'next/image'

import IntervenantImg from '../../public/images/intervenant.png'
import BeneficiairesImg from '../../public/images/student.png'
import CardTarifs from './CardTarifs'

const Tarifs = () => {
  return (
    <section id='tarifs' className='md:h-screen p-3 md:px-7 md:flex md:flex-col md:justify-center md:items-center md:gap-11'>
      <div>
        <h1 className='text-4xl font-semibold text-primary'>Nos commissions</h1>
        <p>Les commissions sont établites en pourcentage en fonction de votre demande.</p>
      </div>
      <div className='flex flex-col gap-3 md:grid md:grid-cols-2'>
        <CardTarifs 
        title="Intervenants"
        description="Commissions à partir de 10%"
        imgSrc={IntervenantImg}
        />
        <CardTarifs 
        title="Bénéficiaires"
        description="Abonnement mensuel de 5000Ar"
        imgSrc={BeneficiairesImg}
        />
      </div>
    </section>
  )
}

export default Tarifs
