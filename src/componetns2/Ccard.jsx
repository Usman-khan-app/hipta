import React from 'react'
import p1 from '../assets/img/p1.jpg'
import p2 from '../assets/img/p2.jpg'
import p3 from '../assets/img/p3.jpg'
export default function Ccard() {
    let costamerCard=[
        {
            id:1,
            img:p1,
            disc:"“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
            name:"— Clare Gupta"
        },  {
            id:2,
            img:p2,
            disc:"“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
            name:"— Clare Gupta"
        },{
            id:2,
            img:p3,
            disc:"“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
            name:"— Clare Gupta"
        }
    ]
  return (
    <div className='coustamer-card-section'>
        {
            costamerCard.map(x=>
                <>
                <div key={x.id}className="costamer-card">
                <div className="costamer-card-img">
                    <img src={x.img} alt="" />
                </div>
                <div className="costamer-card-p">
                    <p>{x.disc}     </p>
                </div>
                <div className="costamer-card-d">
                    <p>{x.name}</p>
                </div>
            </div>
                </>
            )
        }
    </div>
  )
}
