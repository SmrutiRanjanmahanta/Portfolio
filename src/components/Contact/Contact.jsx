import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ur5xsk', 'template_j2qrwea', form.current, 'LvDK8l97TiT4kZbDi')
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
    
    setTimeout(() => setSent(false), 5000);
    e.target.reset();
  };


  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <motion.div 
          className={styles.text}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.description}>
            I'm currently looking for new opportunities. My inbox is always open!
          </p>
          
          <div className={styles.contactLinks}>
            <a href="mailto:smahanta2023@gift.edu.in" className={styles.contactLink}>
              <Mail size={20} /> smahanta2023@gift.edu.in
            </a>
            <a href="mailto:smrutiRanjanmahanta1@gmail.com" className={styles.contactLink}>
              <Mail size={20} /> smrutiRanjanmahanta1@gmail.com
            </a>
            <div className={styles.socials}>
              <a href="https://github.com/SmrutiRanjanmahanta" target="_blank" rel="noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/smrutiRanjanmahanta" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          className={styles.form}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.inputGroup}>
            <input type="text" name="user_name" placeholder="Name" required />
            <span className={styles.inputGlow} />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" name="user_email" placeholder="Email" required />
            <span className={styles.inputGlow} />
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <span className={styles.inputGlow} />
          </div>
          
          <button type="submit" className={styles.sendBtn} disabled={sent}>
            {sent ? (
              <>Sent <CheckCircle size={20} /></>
            ) : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
          
          {sent && (
            <motion.p 
              className={styles.successMsg}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you! Your message has been sent successfully.
            </motion.p>
          )}
        </motion.form>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Smrutiranjan Mahanta. All rights reserved.</p>
      </div>
    </footer>
  );
};

