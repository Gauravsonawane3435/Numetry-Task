import { motion } from "framer-motion";
import React from "react";
import heroImage from "../assets/images/hero-bg.jpg"; // ✅ Import Image

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Welcome to Our Website
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        Your one-stop solution for amazing services.
      </motion.p>
      <motion.a href="#services" className="btn" whileHover={{ scale: 1.1 }}>
        Explore Now
      </motion.a>
    </section>
  );
};

export default Hero;
