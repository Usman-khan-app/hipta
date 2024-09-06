import React from "react";
import Bottomcards from "./Bottomcards";

import "./section2.css";


export default function Section2() {
  return (
    <div className="section-2">
      <div className="section2-top">
        <div className="section2-top-box">
          <div className="section2-box-content">
            <h1>International Tour Management.</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
      <div className="section2-bottom">
        <div className="section2-bottom-box">
          <div className="section2-bottom-box-content">
            <h1>Recent Blog Post</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean
            </p>
          </div>
          <div className="section2-bottom-cards">
            <Bottomcards />
          </div>
        </div>
      </div>
    </div>
  );
}
