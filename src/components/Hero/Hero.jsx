import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.greeting}>Hi, my name is Pornwadee</p>
          <h1>Pornwadee</h1>
          <h2>
            I'm a{"database "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className={styles.desc}>
            I build responsive, user-friendly web applications with modern
            technologies like React, Node.js and Vite.
          </p>

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
          </div>

          <a href="#portfolio" className={styles.button}>
            View My Work
          </a>
        </div>

        <Tilt
          className={styles.tilt}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.2}
        >
          <img
            src="https://i.pinimg.com/564x/4d/c3/54/4dc354bf6bd38fb2bcc57c9f77194172.jpg"
            alt="Profile"
            className={styles.image}
          />
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
