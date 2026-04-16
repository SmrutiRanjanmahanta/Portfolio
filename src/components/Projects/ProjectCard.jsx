import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, highlights },
}) => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.imageOverlayContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.highlights}>
            {highlights && highlights.map((h, i) => (
              <div key={i} className={styles.highlight}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <FaGithub size={18} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

