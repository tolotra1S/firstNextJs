import React, { useState } from 'react'
import Logo from '../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {MdMenu, MdClose} from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <nav className='shadow-sm'>
        {/* Desktop Navbar */}
      <div className='hidden md:flex items-center justify-between p-3'>
        <div>
            <Link href="/">
                <Image src={Logo} alt="Akademika-mg" className='w-64 object-contain'/>
            </Link>
        </div>
        <div className='space-x-7'>
            <Link href="/" className='text-primary hover:text-secondary hover:underline hover:underline-offset-8 font-semibold text-md'>Accueil</Link>
            <Link href="/#mentorat" className='text-primary hover:text-secondary hover:underline hover:underline-offset-8 font-semibold text-md'>Mentorat</Link>
            <Link href="/#tarifs" className='text-primary hover:text-secondary hover:underline hover:underline-offset-8 font-semibold text-md'>Tarifs</Link>
            <Link href="/#apropos" className='text-primary hover:text-secondary hover:underline hover:underline-offset-8 font-semibold text-md'>A Propos</Link>
            <Link href="/#contact" className='text-primary hover:text-secondary hover:underline hover:underline-offset-8 font-semibold text-md'>Contact</Link>
        </div>
        <div className='space-x-7'>
            <Link href="/" className='text-white font-semibold text-md bg-primary py-2 px-5 rounded-lg hover:bg-secondary transition delay-100 duration-250 ease-in-out'>Commencez</Link>
        </div>
      </div>

        {/* Mobile Navbar */}
        <div className='md:hidden flex items-center justify-between p-3'>
        <div className='z-20'>
            <Link href="/">
                <Image src={Logo} alt="Akademika-mg" className='w-52 object-contain'/>
            </Link>
        </div>
        <div className='z-20'>
            <button onClick={handleNav} className="text-primary">
                {nav ? <MdClose size={40}/> : <MdMenu size={40}/>}
            </button>
        </div>

        {nav ? 
        <div className='z-10 fixed w-full h-screen top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-7 bg-white/80 backdrop-blur-md'>
            <Link href="/" onClick={handleNav} className='text-primary hover:text-secondary font-semibold text-xl'>Accueil</Link>
            <Link href="/#mentorat" onClick={handleNav} className='text-primary hover:text-secondary font-semibold text-xl'>Mentorat</Link>
            <Link href="/#tarifs" onClick={handleNav} className='text-primary hover:text-secondary font-semibold text-xl'>Tarifs</Link>
            <Link href="/#apropos" onClick={handleNav} className='text-primary hover:text-secondary font-semibold text-xl'>A Propos</Link>
            <Link href="/#contact" onClick={handleNav} className='text-primary hover:text-secondary font-semibold text-xl'>Contact</Link>
            <Link href="/" onClick={handleNav} className='text-white font-semibold text-xl bg-primary py-2 px-5 rounded-lg hover:bg-secondary transition delay-100 duration-250 ease-in-out'>Commencez</Link>
        </div>
        :
        ''
        }
      </div>
    </nav>
  )
}

export default Navbar
