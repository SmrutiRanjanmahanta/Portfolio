import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Brain } from "lucide-react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className={styles.content}>
        <motion.div 
          className={styles.mainCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.imageWrapper}>
            <img
              src={getImageUrl("about/cpc.jpg")}
              alt="Profile"
              className={styles.aboutImage}
            />
            <div className={styles.imageGlow} />
          </div>
          <p className={styles.description}>
            I am a highly motivated <strong>Computer Science Engineering (AI)</strong> student with a strong inclination toward backend development, full-stack systems, and machine learning applications.
            <br /><br />
            I enjoy transforming ideas into functional applications by combining efficient backend logic, clean responsive frontend design, and data-driven decision-making using ML.
          </p>
        </motion.div>

        <ul className={styles.aboutItems}>
          {[
            {
              icon: <Database size={30} color="#7c3aed" />,
              title: "Backend Development",
              desc: "Efficient backend logic with Spring Boot and Python Flask."
            },
            {
              icon: <Layout size={30} color="#38bdf8" />,
              title: "Full Stack Systems",
              desc: "Creating seamless web experiences from database to UI."
            },
            {
              icon: <Brain size={30} color="#10b981" />,
              title: "AI/ML Enthusiast",
              desc: "Exploring modern technologies to write maintainable and scalable code."
            }
          ].map((item, index) => (
            <motion.li 
              key={index} 
              className={styles.aboutItem}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

