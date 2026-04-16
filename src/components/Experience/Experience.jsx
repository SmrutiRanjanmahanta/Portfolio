import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Internships
      </motion.h2>
      <div className={styles.historyGrid}>
        {history.map((historyItem, id) => (
          <motion.div 
            key={id} 
            className={styles.historyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.orgInfo}>
                <div className={styles.logoContainer}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>
                <div>
                  <h3 className={styles.role}>{historyItem.role}</h3>
                  <p className={styles.organisation}>{historyItem.organisation}</p>
                </div>
              </div>
              <div className={styles.duration}>
                <Calendar size={14} />
                <span>{historyItem.startDate} - {historyItem.endDate}</span>
              </div>
            </div>
            <ul className={styles.details}>
              {historyItem.experiences.map((experience, idx) => (
                <li key={idx}>{experience}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

