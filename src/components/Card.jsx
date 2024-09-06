import React from 'react'
import img from '../assets/img/img2.png'
import img2 from '../assets/img/img5.png'
import img3 from '../assets/img/img4.png'
import img4 from '../assets/img/img6.png'
import img5 from '../assets/img/img0.png'
import img6 from "../assets/img/img3.png";

export default function Card() {
    let card =[
        {
            id:1,
            img :img,
            title:"Good Foods",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
            id:2,
            img:img2,
            title:"Travel Anywhere",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"

        },
        {
            id:3,
            img:img3,
            title:"Airplane",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
            id:4,
            img:img4,
            title:"Beach Resort",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
            id:5,
            img:img5,
            title:"Mountain Climbing",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
            id:1,
            img:img6,
            title:"Hot Air Balloon",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        }
        
    
       ]
  return (
    <div className="bottom-section">
    {
        card.map(x=>
            <>
            <div key={x.id} className="section-box">
                <div className="img">
        <img src={x.img} alt="" />
                </div>
        <h1>{x.title}</h1>
        <p>{x.disc}</p>
        </div>
            </>
        )
    }
   

</div>
  )
}
