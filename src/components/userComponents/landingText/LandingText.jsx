import React from "react";
import { motion } from "framer-motion";
import "./LandingText.css";

function LandingText() {
  return (
    <div className="container-fluid mt-5 container-section">
      <motion.div
        className="first-box-color"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="home-first-section">
          <h1 className="title">SEO</h1>
        </div>
      </motion.div>
      <motion.div
        className="second-box-color mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <h5 className="sub-text">WHY CHOOSE OUR SEO SERVICE?</h5>
          <h2 className="first-section-minihead">Search Engine Optimization</h2>
          <p className="first-section-para">
            Our team, Accolades Media the digital marketing agency in Kochi
            possesses the top Search Engine Optimization experts, who are
            professionally specialized, in Search Engine Optimization Services,
            to elevate our prospective clientele to the front runner in any
            search engine, by prioritizing the appropriate keywords that are
            suitable to generate the potential traffic to experience enhanced
            webpage visibility. The add-on advantage of receiving the
            professional guidance of a Search Engine Optimizer like us is to
            uplift and prioritize the randomly gathered contents from the
            internet.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingText;
