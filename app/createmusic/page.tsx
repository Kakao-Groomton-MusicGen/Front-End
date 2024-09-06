"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"
import Link from "next/link";

export default function CreateMusic() {
    const songUrl = "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Sunny+Day+Sound.mp3";

  return (
    <div className={styles.container}>
      <Top/>
      <div className={styles.lowcontainer}>
        <audio controls>
            <source src={songUrl} type="audio/mp3"/>
        </audio>
        <a href={songUrl} download = "Sunny Day Soung.mp3">
            <button type="button">노래 다운로드</button>
        </a>
      <input
        type="text" placeholder="아이디"
      />
      <input
        type="text" placeholder="비밀번호"
      />
      <button>등록</button>
      <Link href="/home" legacyBehavior>
      <a className={styles.component}>홈으로</a>
      </Link>
      </div>
    </div>
  );
}
