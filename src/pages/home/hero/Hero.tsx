import Image from "next/image";
import Rentals from "@/assets/images/home/rentals.webp";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <Image
        src={Rentals}
        alt="NALABS"
        fill
        className={styles.image}
      />

      <div className={styles.overlay}></div>

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