import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          My<span>Portfolio</span>
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
