import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;

  return (
    <div className={styles.switcher}>
      {LOCALES.map(({ code, label }, index) => (
        <span key={code} className={styles.item}>
          {index > 0 && <span className={styles.divider}>/</span>}
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={code}
            className={locale === code ? styles.active : styles.inactive}
          >
            {label}
          </Link>
        </span>
      ))}
    </div>
  );
}
