import React, { useEffect, useState } from "react";
import "./SeoProcessSection.css";
import { seoList } from "../../../api/userApi";
import { motion } from "framer-motion";

function SeoProcessSection() {
  const [seo, setSeo] = useState([]);

  useEffect(() => {
    seoList()
      .then((res) => {
        setSeo(res?.data?.seo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container-fluid seo-section mt-5">
      <h3 className="text-center process-title">Our SEO Process</h3>
      <div className="row d-flex justify-content-between mt-5">
        {seo.map((item, index) => (
          <motion.div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 process-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="process-content">
              <div className="img-container">
                <img
                  className="process-img"
                  src={item.images[0]}
                  alt={item.seoName}
                />
              </div>
              <h4 className="process-mini-head">{item.seoName}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SeoProcessSection;
