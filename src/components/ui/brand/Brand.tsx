import Link from "next/link";
import styles from "./Brand.module.css";

function Brand() {
  return (
    <Link href="/" className={styles.brand}>
      NALABS
    </Link>
  );
}

export default Brand;