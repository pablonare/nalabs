import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";
import styles from "./Intro.module.css";

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h2>{t("card1.title")}</h2>
            <p>{t("card1.description")}</p>
            <Link href="/getstarted" className={styles.cardAction}>
              {t("card1.cta")}
            </Link>
          </article>

          <article className={styles.card}>
            <h2>{t("card2.title")}</h2>
            <p>{t("card2.description")}</p>
            <button>{t("card2.cta")}</button>
          </article>

          <article className={styles.card}>
            <h2>{t("card3.title")}</h2>
            <p>{t("card3.description")}</p>
            <Link href="/consultation" className={styles.cardAction}>
              {t("card3.cta")}
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
