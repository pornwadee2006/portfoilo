import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>

        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:someone@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
