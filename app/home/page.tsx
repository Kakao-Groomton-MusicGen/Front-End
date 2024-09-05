"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"

export default function Home() {
  return (
    <div className={styles.container}>
      <Top/>
      <div className={styles.lowcontainer}>
      <input
        type="text" placeholder="키워드 입력"
      />
      <button>전송</button>
      </div>
    </div>
  );
}
