import React from 'react'
import './scroll.css'
export default function Scroll() {
  const scrolltosection =()=>{
    const section = document.querySelector('#section')
    if(section){
      window.scrollTo({
        top:section.offsetTop,
        behavior:'smooth'
      })
    }
   
  }
  return (
    <div className='scroll'>
      <div className="scroll-content">
       <div className="scroll-icon">
        <a href="#section" onClick={scrolltosection}><i className="ri-arrow-down-s-fill"></i><br />
        <span>Scroll down</span>
        </a>
       </div>
      </div>
    </div>
  )
}
