import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.typing}>
          <h1 className={styles.title}>{t("title")}</h1>
        </div>
      </div>
    </section>
  );
}
