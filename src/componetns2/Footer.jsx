import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footercard">
          <h1>Quick Link</h1>
          <ul className="footer_links">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Rooms</a>
            </li>
          </ul>
        </div>

        <div className="footercard">
          <h1>Support</h1>
          <ul className="footer_links">
            <li>
              <a href="">Our Location</a>
            </li>
            <li>
              <a href="">The Hosts</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contects</a>
            </li>
            <li>
              <a href="">Restaurant</a>
            </li>
          </ul>
        </div>

        <div className="footercard">
          <h1>Contect Info</h1>
          <div className="conp">
            <div className="bigp">
              <p>Address:</p>
            </div>
            <div className="smp">
              <p>98 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>

          <div className="conp">
            <div className="bigp">
              <p>Phone:</p>
            </div>
            <div className="smp">
              <p>(+1) 435 3533</p>
            </div>
          </div>

          <div className="conp">
            <div className="bigp">
              <p>Email:</p>
            </div>
            <div className="smp">
              <p>nfo@yourdomain.com</p>
            </div>
          </div>
        </div>
        <div className="footercard">
          <h1>Subscribe</h1>
          <div className="textp">
            <p>Sign up for our newsletter</p>
            <textarea placeholder="Your email ..."></textarea>
            <div className="email_icon">
              <a href=""><i className="ri-send-plane-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyr">
        <p>Copyright &copy; 2024 All rights reserved | This template is made with &#10084; by Colorlib</p>
      </div>
    </div>
  );
}
