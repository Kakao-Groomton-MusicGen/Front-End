"use client"

import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"
import Link from "next/link";

export default function CreateMusic() {
    // 서버에서 받은 노래 URL (예시)
    const songUrl = "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Sunny+Day+Sound.mp3";

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.lowcontainer}>
        {/* 생성된 노래 */}
        <h2>생성된 노래</h2>
        <audio controls>
          <source src={songUrl} type="audio/mp3" />
        </audio>

        {/* 노래 다운로드 버튼 */}
        <a href={songUrl} download="Sunny Day Sound.mp3">
          <button type="button" className={styles.button}>다운로드</button>
        </a>

        {/* 아이디와 비밀번호 입력란 */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="아이디"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className={styles.input}
          />
          <button type="button" className={styles.registerButton}>등록</button>
        </div>

        {/* 홈으로 이동하는 버튼 */}
        <Link href="/home" legacyBehavior>
          <a className={styles.component}>홈으로</a>
        </Link>
      </div>
    </div>
  );
}
