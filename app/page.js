import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className={styles.main}>
      <div className={styles.image_margin}>
        <Image
          className={styles.myimage}
          src="/profile/asung.png"
          width={140}
          height={39}  
          alt="AS"/>
        </div>

      <div className={styles.resume_subject}>
        <h3>
          자동차용 내외장 시스템 부품 개발팀 정민석
        </h3>        
      </div>

      <div className={styles.keyword_box}>
          <Link href="./profile">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}><h3>Portfolio</h3></span>
            </button>
          </Link>
      </div>
    </main>
    
  );
}
