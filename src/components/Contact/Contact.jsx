import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

// ✅ Initialize EmailJS (important)
emailjs.init("70z2bgAG6POQ92OZO");

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Validation
  const validate = (fields) => {
    const errs = {};
    if (!fields.user_name?.trim()) errs.user_name = "Name is required";

    if (!fields.user_email?.trim()) {
      errs.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.user_email)) {
      errs.user_email = "Invalid email format";
    }

    if (!fields.message?.trim()) errs.message = "Message is required";

    return errs;
  };

  // ✅ Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form.current));
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    emailjs
      .sendForm(
        "service_nwstt32",      // ✅ YOUR SERVICE ID
        "template_3zpgo6i",     // ✅ YOUR TEMPLATE ID
        form.current,
        "70z2bgAG6POQ92OZO"     // ✅ YOUR PUBLIC KEY
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setSent(true);
        setErrors({});
        form.current.reset();

        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS ERROR:", error);
        setErrors({
          submit: "Failed to send. Check console error.",
        });
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        {/* LEFT SIDE */}
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

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className={styles.form}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          noValidate
        >
          <div className={styles.inputGroup}>
            <input type="text" name="user_name" placeholder="Name" />
            <span className={styles.inputGlow} />
            {errors.user_name && (
              <span className={styles.errorMsg}>{errors.user_name}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input type="email" name="user_email" placeholder="Email" />
            <span className={styles.inputGlow} />
            {errors.user_email && (
              <span className={styles.errorMsg}>{errors.user_email}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <textarea name="message" placeholder="Your Message" rows="5" />
            <span className={styles.inputGlow} />
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}
          </div>

          {errors.submit && (
            <span className={styles.errorMsg}>{errors.submit}</span>
          )}

          <button type="submit" className={styles.sendBtn} disabled={sent}>
            {sent ? (
              <>
                Sent <CheckCircle size={20} />
              </>
            ) : (
              <>
                Send Message <Send size={20} />
              </>
            )}
          </button>

          {sent && (
            <motion.p
              className={styles.successMsg}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Smrutiranjan Mahanta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};