import React, {useState, useEffect} from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md'

function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll, true);
    });

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
  return (
    <>
    {showButton ? <button onClick={scrollToTop} className='fixed bottom-2 right-3 rounded-full bg-[#27348B] text-white z-30 shadow-lg'>
        <MdKeyboardArrowUp size={40} />
    </button> : <p></p>}
    </>
  )
}

export default ScrollToTop