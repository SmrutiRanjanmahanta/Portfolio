import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className={styles.timeline}>
        {education.map((item, id) => (
          <motion.div 
            key={id} 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: id % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.timelineDot}>
              <GraduationCap size={16} color="white" />
            </div>
            <div className={styles.timelineContent}>
              <span className={styles.duration}>{item.duration}</span>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.school}>{item.school}</p>
              <div className={styles.scoreBadge}>{item.score}</div>
            </div>
          </motion.div>
        ))}
        <div className={styles.timelineLine} />
      </div>
    </section>
  );
};
