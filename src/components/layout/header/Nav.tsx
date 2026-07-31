import Link from "next/link";
import styles from "./Nav.module.css";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Header");

  return (
    <nav className={styles.nav}>
      <Link href="/">{t("nav")}</Link>
    </nav>
  );
}