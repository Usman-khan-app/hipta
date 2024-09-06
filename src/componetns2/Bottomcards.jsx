import React from 'react'
import img1 from '../assets/img/imgm.jpg'
import img2 from '../assets/img/imgb.jpg'
import img3 from '../assets/img/imgs.jpg'



export default function Bottomcards() {
    let bcards =[
        {
            id:1,
            img:img1,
            date:"February 26, 2018",
            title:"45 Best Places To Unwind",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
            id:2,
            img:img2,
            date:"February 26, 2018",
            title:"45 Best Places To Unwind",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },{
            id:3,
            img:img3,
            date:"February 26, 2018",
            title:"45 Best Places To Unwind",
            disc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        
    ]
  return (
    <>
    {
        bcards.map(x =>
            <>
            <div className="section-bottom-card">
                <div className="imgsec">
                    <img src={x.img} alt="image " />
                </div>
                <div className="bcard-content">
                    <h4>{x.date}</h4>
                    <h1>{x.title}</h1>
                    <p>{x.disc}</p>
                </div>
                    
            </div>
            </>

        )
    }
    </>
   
  )
}
