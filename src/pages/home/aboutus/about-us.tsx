import Container from "@/components/ui/container/Container";
import styles from "./about-us.module.css";

export default function AboutUs() {
  return (
    <section className={styles.about}>
    <Container> 
        <div className={styles.container}>
            <h2>About Us</h2>

            <p>
            Founded by an industrial engineer with a passion for technology and
            digital innovation, Nalabs creates modern websites designed to help
            businesses grow online.
            </p>

            <p>
            We combine engineering, design and development to build fast,
            functional and unique digital experiences.
            </p>
        </div>
    </Container>
    </section>
  );
}