import Container from "@/components/ui/container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>

          <div className={styles.brand}>
            <h2>NALABS</h2>
            <p>
              Digital solutions
              <br />
              for growing
              <br />
              businesses.
            </p>
          </div>

          <div className={styles.contact}>
            <h3>CONTACT</h3>
            <a href="mailto:hello@nalabs.com">
              hello@nalabs.com
            </a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 Nalabs. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
}