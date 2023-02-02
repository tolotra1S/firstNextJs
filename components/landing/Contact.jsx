import React from 'react'
import Image from 'next/image'
import ContactImg from '../../public/images/contact.png'

const Contact = () => {
  return (
    <section id="contact" className='md:h-screen md:px-7 md:items-center md:justify-center md:grid md:grid-cols-2 md:mx-auto md:gap-7'>
        <div className='flex flex-col p-3 gap-3'>
          <h1 className='text-4xl font-semibold text-primary'>Contactez-nous</h1>
          <p className='text-xl md:text-lg'>
            N'hesitez pas à nous envoyer des messages pour plus d'information. Nous sommes là pour vous aidez.
          </p>
          <form className='flex flex-col space-y-2'>
            <label className='flex flex-col'>
              <span className='font-semibold'>Votre nom:</span>
              <input type="text" placeholder='John Doe' className='border border-primary rounded-lg py-1 px-3 shadow-md'/>
            </label>
            <label className='flex flex-col'>
              <span className='font-semibold'>Votre e-mail:</span>
              <input type="email" placeholder='JohnDoe@example.mg' className='border border-primary rounded-lg py-1 px-3 shadow-md'/>
            </label>
            <label className='flex flex-col'>
              <span className='font-semibold'>Votre message:</span>
              <textarea rows="5" placeholder='messages...' className='border border-primary rounded-lg py-1 px-3 shadow-md resize-none'></textarea>
            </label>
            <input type="submit" value="Envoyez" className='text-xl text-white font-semibold bg-primary p-2 rounded-lg shadow-md hover:bg-secondary cursor-pointer'/>
          </form>
        </div>
        <div className='hidden md:block'>
          <Image src={ContactImg} alt="startup" className='object-cover w-full drop-shadow-md'/>
        </div>
    </section>
  )
}

export default Contact
