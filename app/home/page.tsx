"use client"

import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Home() {
  const router = useRouter();

const[keyword, setKeyword] = useState("");
const[musicstyle, setMusicStyle] = useState("");
const[title, setTitle] = useState("");

const handleCreate = async () => {
  const result = true;
  if(result) router.push("/createmusic");
  return
}
  return (
    <div className={styles.container}>
      <Top/>
      <div className={styles.lowcontainer}>
        <div className={styles.inputgroup}>
          <input
          type="text"
          placeholder="키워드 입력"
          className={styles.input}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          placeholder="노래 스타일"
          className={styles.input}
          value={musicstyle}
          onChange={(e) => setMusicStyle(e.target.value)}
        />
        <input
          type="text"
          placeholder="제목"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.sendbutton} onClick={handleCreate}>전송</button>
        </div>
      </div>
    </div>
  );
}
