import Image from "next/image";
import Main from './components/main'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
     <div className={styles.main}>
        <Main />
     </div>
    </div>
  );
}
