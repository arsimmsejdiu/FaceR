//import Image from 'next/image'
import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <main>
      <footer className={styles.footer}>
        <a
          href="https://arsimsejdiu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Arsim Sejdiu{" " + new Date().getFullYear() + " "}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </main>
  );
}
