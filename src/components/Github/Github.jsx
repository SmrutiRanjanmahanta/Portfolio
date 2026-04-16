import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./Github.module.css";

export const Github = () => {
  return (
    <section className={styles.container} id="github">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Explore My Work
      </motion.h2>
      
      <div className={styles.content}>
        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.statCard}>
            <FaGithub size={40} color="white" />
            <div className={styles.statInfo}>
              <a href="https://github.com/SmrutiRanjanmahanta" target="_blank" rel="noreferrer">
                @SmrutiRanjanmahanta
              </a>
              <p>Passionate about building scalable systems</p>
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.miniStat}>
              <Star size={20} color="#fbbf24" />
              <span>30+ Stars</span>
            </div>
            <div className={styles.miniStat}>
              <GitFork size={20} color="#38bdf8" />
              <span>8+ Forks</span>
            </div>
            <div className={styles.miniStat}>
              <Terminal size={20} color="#10b981" />
              <span>100+ Commits</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.repoGrid}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {[
            { name: "Email-Spam-Detection", lang: "Python", color: "#3572A5" },
            { name: "Job-Portal-FullStack", lang: "Java", color: "#b07219" },
            { name: "Student-Management", lang: "Java", color: "#b07219" }
          ].map((repo, idx) => (
            <div key={idx} className={styles.repoCard}>
              <div className={styles.repoHeader}>
                <Terminal size={14} />
                <span>{repo.name}</span>
              </div>
              <div className={styles.repoBody}>
                <div className={styles.langInfo}>
                  <span className={styles.langDot} style={{ backgroundColor: repo.color }} />
                  <span>{repo.lang}</span>
                </div>
                <div className={styles.repoAction}>
                  <FaGithub size={16} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
