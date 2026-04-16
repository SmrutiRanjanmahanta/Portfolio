import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <motion.div 
            key={id} 
            className={styles.skillCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: id * 0.05 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <div className={styles.skillInfo}>
              <h3>{skill.title}</h3>
              {skill.rating && (
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < skill.rating ? styles.starFilled : styles.starEmpty}>
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.glow} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
