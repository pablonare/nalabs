import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";
import styles from "./about-us.module.css";

export default function AboutUs() {
  const t = useTranslations("aboutUs");

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.container}>
          <h2>{t("heading")}</h2>
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
        </div>
      </Container>
    </section>
  );
}