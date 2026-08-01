import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h2>NALABS</h2>
            <p>{t.rich("tagline", { br: () => <br /> })}</p>
          </div>

          <div className={styles.contact}>
            <h3>{t("contactHeading")}</h3>
            <a href="mailto:hello@nalabsolutions.com">hello@nalabsolutions.com</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}