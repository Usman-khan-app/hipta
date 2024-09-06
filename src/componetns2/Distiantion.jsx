import React from "react";
import "./dis.css";
import img from "../assets/img/imgm.jpg";
import img1 from "../assets/img/imgb.jpg"
import img2 from "../assets/img/imgs.jpg";
import img3 from "../assets/img/img5.jpg";

;

export default function Distiantion() {
  return (
    <div className="dist">
      <div className="dist-top">
        <div className="dist-content">
          <h1>Top Destination</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </div>
      </div>
      <div className="dist-bottom">
       
      <div className="dist-bottom-card">
          <div className="dist-bottom-card-img">
            <a href="">
              <img src={img} alt="" />
            </a>
          </div>
          <h1>
            <a href="">Food & Wines</a>
          </h1>
          <div className="stars">
            <div className="star">
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-half-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-line"></i>
                </a>
              </span>
            </div>

            <div className="scon">
              <span>3,239 reviews</span>
            </div>
          </div>
        </div>

        <div className="dist-bottom-card">
          <div className="dist-bottom-card-img">
            <a href="">
              <img src={img1} alt="" />
            </a>
          </div>
          <h1>
            <a href="">Food & Wines</a>
          </h1>
          <div className="stars">
            <div className="star">
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-half-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-line"></i>
                </a>
              </span>
            </div>

            <div className="scon">
              <span>3,239 reviews</span>
            </div>
          </div>
        </div>

        <div className="dist-bottom-card">
          <div className="dist-bottom-card-img">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </div>
          <h1>
            <a href="">Food & Wines</a>
          </h1>
          <div className="stars">
            <div className="star">
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-half-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-line"></i>
                </a>
              </span>
            </div>

            <div className="scon">
              <span>3,239 reviews</span>
            </div>
          </div>
        </div>

        <div className="dist-bottom-card">
          <div className="dist-bottom-card-img">
            <a href="">
              <img src={img3} alt="" />
            </a>
          </div>
          <h1>
            <a href="">Food & Wines</a>
          </h1>
          <div className="stars">
            <div className="star">
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-half-fill"></i>
                </a>
              </span>
              <span>
                <a href="">
                  <i className="ri-star-line"></i>
                </a>
              </span>
            </div>

            <div className="scon">
              <span>3,239 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
