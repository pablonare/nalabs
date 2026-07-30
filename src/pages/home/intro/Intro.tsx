import Link from "next/link";
import Container from "@/components/ui/container/Container";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <Container>
      <div className={styles.cards}>
        <article className={styles.card}>
          <h2>Create Your Website</h2>
          <p>
            Whether you're launching a new business or redesigning an existing one, 
            we'll create a modern website designed around your goals.
          </p>
          <Link href="/getstarted" className={styles.cardAction}>
            Get Started
          </Link>
        </article>

        <article className={styles.card}>
          <h2>OUR SERVICES</h2>
          <p>
            Web design, e-commerce solutions and digital
            experiences created to help your business
            grow online.
          </p>

          <button>
            Explore services
          </button>
        </article>

        <article className={styles.card}>
          <h2>FREE WEBSITE CONSULTATION</h2>

          <p>
            Get a free analysis of your website and discover
            opportunities to improve your online presence.
          </p>

          <button>
            Book consultation
          </button>
        </article>

      </div>
      </Container>
    </section>
  );
}