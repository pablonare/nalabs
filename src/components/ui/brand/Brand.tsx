import Link from "next/link";
import styles from "./Brand.module.css";

function Brand() {
  return (
    <Link href="/" className={styles.brand}>
      NALAB
    </Link>
  );
}

export default Brand;