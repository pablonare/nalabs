import Brand from "@/components/ui/brand/Brand";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.content}>
          <Brand />
        </div>
    </header>
  );
}