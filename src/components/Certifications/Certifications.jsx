import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className={styles.grid}>
        {certifications.map((cert, id) => (
          <motion.div 
            key={id} 
            className={styles.certCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            whileHover={{ y: -5, borderColor: "var(--accent-primary)" }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <Award size={32} color="var(--accent-primary)" />
            </div>
            <div className={styles.certInfo}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer} • {cert.date}</p>
            </div>
            <div className={styles.glow} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
