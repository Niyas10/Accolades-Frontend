import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="/FooterLogo.png"
            alt="Footer Logo"
            className="footer-logo"
          />
          <p className="footer-text">
            The ultimatum of our successful company is to adequately provide our
            prospective clients with the required service that they promptly
            demand from us.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li className="hover-effect">Home</li>
              <li className="hover-effect">About</li>
              <li className="hover-effect">Services</li>
              <li className="hover-effect">Careers</li>
              <li className="hover-effect">Blogs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Branches</h3>
            <ul>
              <li className="hover-effect">Calicut</li>
              <li className="hover-effect">Trivandrum</li>
              <li className="hover-effect">Bengaluru</li>
              <li className="hover-effect">Mumbai</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Address Corporate Office</h3>
            <p>
              Accolades Integrated Pvt Ltd No.522, 1st Floor, Anjanadri
              Building, Hamakrishna NH, Hebbal, Mysore, Karnataka - 562 019
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">Copyright 2022-23 | All Rights Reserved</p>
        <motion.div className="social-icons">
          <motion.span className="icon" whileHover={{ scale: 1.2 }}>
            <i className="fab fa-facebook-f"></i>
          </motion.span>
          <motion.span className="icon" whileHover={{ scale: 1.2 }}>
            <i className="fab fa-instagram"></i>
          </motion.span>
          <motion.span className="icon" whileHover={{ scale: 1.2 }}>
            <i className="fab fa-twitter"></i>
          </motion.span>
          <motion.span className="icon" whileHover={{ scale: 1.2 }}>
            <i className="fab fa-linkedin-in"></i>
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
