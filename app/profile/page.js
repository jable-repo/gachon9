import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./components_portfolio";

export default function Home() {
  return (
    <main>
      <div className={styles.asung}>
        <Image
          className={styles.asung_margin}
          src="/profile/asung.png"
          width={140}
          height={39}  
          alt="AS"
        />
      </div>
      <div className={styles.resume_subject}>
        <h3>
          '민석의 Portfolio - R&D Team'
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.profile_image}>
          <Image
            src="/profile/tired.png"
            width={150}
            height={150}
            alt="my usual tired self"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}><h2>사원 정민석</h2></div>
            <div className={styles.profile_info_general_year}><h3>2000.12.19</h3></div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}><h4>M.P</h4>010-5387-2936</div>
            <div class={styles.profile_label}><h4>Email</h4>min292936@asung.co.kr</div>
            <div class={styles.profile_label}><h4>Adress</h4>경기 화성시 우정읍 한말길 38-6 아성프라텍 기술연구소</div>
            <div class={styles.profile_label}>R&D Team</div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}><h4>학력</h4></div>
            <div className={styles.grid_item}>가천대학교</div>
            <div className={styles.grid_item}>
              <div>재학중 (3학년)</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}><h4>경력</h4></div>
            <div className={styles.grid_item}>아성프라텍</div>
            <div className={styles.grid_item}>
              <div>R&D Team (1년 2개월)</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
            <h4>인턴&middot;대외활동</h4>
            </div>
            <div className={styles.grid_item}>대한민국 공익광고제</div>
          </div>

          <div>
            <div className={styles.grid_item}><h4>자격증&middot;어학</h4></div>
            <div className={styles.grid_item}>DSAC Data Science</div>
            <div className={styles.grid_item}>TRIZ</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.car}>▣ 개발차종</div>
        <div className={styles.keyword_box}>
          <Link href="https://asung.co.kr">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>Asung Platech</span>
            </button>
          </Link>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>NH2 (넥쏘 후속)</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>DL3 PE (K5)</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>TSD A-01 (ST1)</span>
          </button>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div><h3>2022.02~2025.02</h3></div>
              <div>재학</div>
            </div>
            <div>
              <div>
                <div><h3>가천대학교</h3></div>
                <div>미래자동차학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>4.45 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div><h3>2018</h3></div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div><h3>부산남일고등학교</h3></div>
                <div>물리화학반</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );

}
