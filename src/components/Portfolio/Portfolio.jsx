import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Portfolio.module.css";

const PROJECTS = [
  {
    title: "E-Commerce Website",
    desc: "A full-featured online store built with React and Node.js.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Manager App",
    desc: "A productivity app to manage daily tasks and projects.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Vite", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects and skills.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Portfolio</h2>
        <p className={styles.subtitle}>Some of my recent projects</p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.title} className={styles.card}>
              <img src={project.image} alt={project.title} />
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
