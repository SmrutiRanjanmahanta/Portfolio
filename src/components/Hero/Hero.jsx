import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, Mail, Code, Settings, PieChart } from "lucide-react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.title}>
          Smrutiranjan Mahanta
        </h1>
        <div className={styles.typewriter}>
          <span className={styles.sparkle}>✨</span>{" "}
          <Typewriter
            words={["Java Developer", "Full Stack Developer", "AI/ML Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className={styles.description}>
          💡 “Building scalable web applications and intelligent systems that solve real-world problems.”
        </p>
        <div className={styles.ctaGroup}>
          <a href="/cv.pdf" className={styles.downloadBtn} download>
            <Download size={20} /> Download CV
          </a>
          <a href="#contact" className={styles.contactBtn}>
            <Mail size={20} /> Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.heroImgWrapper}>
          <img
            src={getImageUrl("hero/smruti.jpeg")}
            alt="Hero image of Smrutiranjan Mahanta"
            className={styles.heroImg}
          />
          <div className={styles.glow} />
        </div>

        {/* Floating Icons */}
        <motion.div 
          className={`${styles.floatingIcon} ${styles.icon1}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code color="#7c3aed" size={32} />
        </motion.div>
        <motion.div 
          className={`${styles.floatingIcon} ${styles.icon2}`}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Settings color="#38bdf8" size={32} />
        </motion.div>
        <motion.div 
          className={`${styles.floatingIcon} ${styles.icon3}`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <PieChart color="#10b981" size={32} />
        </motion.div>
      </motion.div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

