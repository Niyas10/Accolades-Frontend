import React from "react";
import "./Onpage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Onpage() {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="container-fluid mt-5 onpage-section">
      <div className="row">
        <motion.div
          ref={refLeft}
          className={`col-lg-6 d-flex align-items-center left-side ${
            inViewLeft ? "animate" : ""
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-section bg-white p-4">
            <h2 className="text-start mb-4">On-page SEO</h2>
            <p className="text-justify para-seo">
              On-page SEO is the additional technical aspect of things; it is
              the nuts and bolts of your website, your approach to the layout,
              and also the code and practicality. Getting everything right and
              up to par with best practices is vital to an outstanding search
              engine optimization service strategy. If folks and crawlers cannot
              browse or perceive your website, you won't get very far. We tweak
              your website code as well as content to optimize your website for
              search engines. We optimize your website code and build changes to
              canonical tags, internal links, and Meta information to enhance
              search engine visibility. We revise your website content to
              include targeted keywords and map them in line with the content
              strategy.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={refRight}
          className={`col-lg-6 d-flex align-items-center justify-content-center image-container ${
            inViewRight ? "animate" : ""
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/SEO3.png"
            alt="On-page SEO illustration"
            className="img-fluid"
          />
        </motion.div>
      </div>

      <div className="row mt-5 second-section mb-5">
        <motion.div
          className={`col-lg-6 d-flex align-items-center justify-content-center image-container ${
            inViewLeft ? "animate" : ""
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/SEO1.png"
            alt="On-page SEO illustration"
            className="img-fluid"
          />
        </motion.div>

        <motion.div
          className={`col-lg-6 d-flex align-items-center right-side ${
            inViewRight ? "animate" : ""
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-section bg-white p-4">
            <h2 className="text-start mb-4">On-page SEO</h2>
            <p className="text-justify para-seo">
              On-page SEO is the additional technical aspect of things; it is
              the nuts and bolts of your website, your approach to the layout,
              and also the code and practicality. Getting everything right and
              up to par with best practices is vital to an outstanding search
              engine optimization service strategy. If folks and crawlers cannot
              browse or perceive your website, you won't get very far. We tweak
              your website code as well as content to optimize your website for
              search engines. We optimize your website code and build changes to
              canonical tags, internal links, and Meta information to enhance
              search engine visibility. We revise your website content to
              include targeted keywords and map them in line with the content
              strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Onpage;
