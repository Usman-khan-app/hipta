import React from "react";
import "./main2.css";
import img1 from "../assets/img/img1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
export default function Main2() {
    useGSAP(()=>{
        gsap.from('.left-box,.right-box',{
            y:100,
            duration:1,
            opacity:0
        })
    })
  return (
    <div className="main-2" id="section">
      <div className="box">
        <div className="left-box">
          <img src={img1} alt=" image" />
        </div>
        <div className="right-box">
          <div className="right-box-txt">
            <h1>Welcome To Our Website</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="main-2-icon">
            <div className="circle">
                <a href=""><i className="ri-play-large-fill"></i></a>
            </div>
            <div className="video-txt">
                <a href="">watch the video</a>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
