import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Number.module.css";

const STATS = [
  { label: "Years of Experience", end: 3 },
  { label: "Projects Completed", end: 25 },
  { label: "Happy Clients", end: 15 },
  { label: "Cups of Coffee", end: 500 },
];

const Number = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className={styles.number} ref={ref}>
      <div className={styles.grid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <h3>
              {inView && <CountUp end={stat.end} duration={2.5} />}
              {inView ? "+" : "0"}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Number;
