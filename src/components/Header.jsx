import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left ">
        <h1 className="logo">
          <a href="">Hipta</a>
        </h1>
      </div>
      <div className="right  ">
        <div className="burger">
          <a href="">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
