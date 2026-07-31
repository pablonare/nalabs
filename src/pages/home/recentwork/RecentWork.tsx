import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";
import styles from "./RecentWork.module.css";
import Rentals from "@/assets/images/home/rentals.webp";
import Image from "next/image";

export default function RecentWork() {
  const t = useTranslations("recentWork");

  return (
    <section className={styles.recentWork}>
      <Container>
        <div className={styles.heading}>
          <h2>{t("heading")}</h2>
        </div>

        <article className={styles.project}>
          <div className={styles.media}>
            <Image src={Rentals} alt="NALABS" fill className={styles.image} />
          </div>

          <div className={styles.content}>
            <h3>{t("projectTitle")}</h3>
            <p>{t("projectDescription")}</p>
            <button>{t("cta")}</button>
          </div>
        </article>
      </Container>
    </section>
  );
}
