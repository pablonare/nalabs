import Container from "@/components/ui/container/Container";
import styles from "./RecentWork.module.css";
import Rentals from "@/assets/images/home/rentals.webp";  
import Image from "next/image";

export default function RecentWork() {
  return (
    <section className={styles.recentWork}>
     <Container>    

        <div className={styles.heading}>
            <h2>OUR RECENT WORK</h2>
        </div>

        <article className={styles.project}>
            <div className={styles.media}>
              <Image
                  src={Rentals}
                  alt="NALABS"
                  fill
                  className={styles.image}
              />
            </div>

            <div className={styles.content}>
            <h3>Antik Surf Club</h3>

            <p>
                A modern website designed for a surf school,
                focused on creating a professional online
                presence and improving customer experience.
            </p>

            <button>
                View project
            </button>
            </div>

        </article>
     </Container>
    </section>
  );
}