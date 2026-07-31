import Brand from "@/components/ui/brand/Brand";
import LanguageSwitcher from "./LanguageSwitcher";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.side} />
        <Brand />
        <div className={styles.side}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
