import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";
import styles from "./Content.module.css";
import Link from "next/link";

// Correct the file name to Content.tsx

export default function Content() {
  const t = useTranslations("Content");

  return (
    <section className={styles.content}>
      <Container>
          <h2>{t("heading")}</h2>
          <h3>{t("webDesign")}</h3>
          <p>{t("paragraph1")}</p>
          <h3>{t("webDevelopment")}</h3>
          <p>{t("paragraph2")}</p>
          <h3>{t("seo")}</h3>
          <p>{t("paragraph3")}</p>
          <h3>{t("businessSolution")}</h3>
          <p>{t("paragraph4")}</p>
          <Link href="/getstarted" className={styles.contentAction}>
           {t("buttonText")}
          </Link>
      </Container>
    </section>
  );
}
