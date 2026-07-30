import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>
      <div className={styles.typing}>
        <h1 className={styles.title}>
          LET US CREATE YOUR WEBSITE
        </h1>
      </div>
    </div>

    </section>
  );
}