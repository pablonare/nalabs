import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "@/components/ui/container/Container";
import styles from "./RecentWork.module.css";
import AntikWeb from "@/assets/images/home/antikweb.webp";
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

         <Link href="https://antiksurf.com" className={styles.media}>
          <Image
            src={AntikWeb}
            alt="Antik website"
            fill
            className={styles.image}
          />
         </Link>

          <div className={styles.content}>
            <h3>{t("projectTitle")}</h3>
            <p>{t("projectDescription")}</p>
            <Link href="https://antiksurf.com" className={styles.button}>
              {t("cta")}
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
