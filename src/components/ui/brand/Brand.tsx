import Link from "next/link";
import styles from "./Brand.module.css";

function Brand() {
  return (
    <Link href="/" className={styles.brand}>
      <span className={styles.nalab}>NALAB</span>
      <span className={styles.solutions}>SOLUTIONS</span>
    </Link>
  );
}

export default Brand;