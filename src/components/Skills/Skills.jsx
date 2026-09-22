import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";
import styles from "./Skills.module.css";

const SKILLS = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Vite", icon: <SiVite />, color: "#646cff" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <p className={styles.subtitle}>Technologies I work with</p>

        <div className={styles.grid}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <div className={styles.icon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
