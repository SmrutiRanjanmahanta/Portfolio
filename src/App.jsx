import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import { Certifications } from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience/Experience";
import { Github } from "./components/Github/Github";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loaderScreen}>
        <div className={styles.loaderRing} />
        <p className={styles.loaderText}>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Experience />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
