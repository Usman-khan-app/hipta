import React from 'react'
import './costamer.css'
import Ccard from './Ccard'
export default function CostamerSection() {
  return (
    <div className='costamer-section'>
        <h1>Happy Customers</h1>
        <div className="coustamer-card-section">
            <Ccard />
            
        </div>
    </div>
  )
}
