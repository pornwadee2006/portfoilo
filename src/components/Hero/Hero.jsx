import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1>Your Name</h1>
          <h2>
            I'm a{" "}
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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&fit=crop"
            alt="Profile"
            className={styles.image}
          />
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
