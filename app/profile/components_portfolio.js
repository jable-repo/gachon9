import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
              <div>총 1년 2개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div><h4>2023.02 ~</h4></div>
            <div>1년 2개월</div>
          </div>
          <div>
            <div><h4>아성프라텍</h4></div>
            <div>R&D Team 사원</div>
          </div>
          <div>
            <div>
              <div><h4>주요직무</h4></div>
              <div>
                신차 및 연식변경차의 내외장 시스템 개발을 담당하고 있습니다.
                <br />
                <br />
                현재 K5 연식변경, ST1을 런칭했습니다.<br />
                <br />
                넥쏘 후속(NH2) 담담자로써, 수소 시스템 관련 업무도 진행중입니다.
                <br />
                <br />
                유한요소해석에 관심이 많습니다.
                <br />
                <br />
                추가 문의사항 있으시면 min292936@asung.co.kr로 연락 주시면 회신 드리겠습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  function List() {
    let 개발차종 = ["DL3 PE", "TSD A-01", "NH2"];
    return (
      <div>
        <h4>개발차종</h4>
        {개발차종.map((item, i) => {
          return (
            <div key={i}>
              <h4>{i}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
