import React, { useEffect, useRef } from 'react'
import './hero.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
export default function Hero() {
  const gsapref = useRef()
  useGSAP(()=>{
    gsap.from(gsapref.current,{
      y:110,
      opacity:0,
      duration:1

    })
  })
  return (
    <div ref={gsapref} className='hero' >
      <div className="main-content">
        <h1 className='big-txt'>Travel & Tours</h1>
        <h1 className='small-txt'>A free template by <a href="">Colorlib</a>. Download and share!</h1>
        <button className='hero-btn'> Vist Cololibb</button>
      </div>
    </div>
  )
}
