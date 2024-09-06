"use client"

import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [musicstyle, setMusicStyle] = useState("");
  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState("");

  // 입력값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 엔터 입력시 단계 전환 및 상태 업데이트
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      if (step === 1) {
        setKeywords(inputValue.trim());
        setStep(2);
        setInputValue(""); // 입력창 비우기
      } else if (step === 2) {
        setMusicStyle(inputValue.trim());
        setStep(3);
        setInputValue("");
      } else if (step === 3) {
        setTitle(inputValue.trim());
        setStep(4);
        setInputValue("");
      }
    }
  };

  // 입력 완료 후 생성 버튼 클릭 처리
  const handleCreate = async () => {
    if (step === 4) {
      console.log("Keyword:", keywords, "Style:", musicstyle, "Title:", title);
      const songData = {
        keywords,
        musicstyle,
        title,
      };

      try{
        const response = await fetch("http://15.165.232.148:3000/api/songs", {
          method : "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(songData),
        });

        if(response.ok){
          const data = await response.json();
          console.log("노래 생성 성공 : ", data);
          router.push("/createmusic");
        }
        else{
          console.error("노래 생성 실패 : ", response.statusText);
        }
      }
      catch(error){
        console.error("노래 생성 중 오류 발생 : ",error);
      }
    }
  };

  // 각 단계에 맞는 안내 메시지 반환
  const getCurrentQuestion = () => {
    if (step === 1) return "키워드 입력";
    if (step === 2) return "스타일 입력";
    if (step === 3) return "제목 입력";
    return "입력이 완료되었습니다!";
  };

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          {/* 단계별로 질문과 입력값을 쌓아서 출력 */}
          <div className={styles.chatMessage}>
            <p className={styles.chatQuestion}>노래 생성에 반영할 키워드들을 입력해주세요.</p>
            {keywords && <p className={styles.chatAnswer}>{keywords}</p>}
          </div>
          {step > 1 && (
            <div className={styles.chatMessage}>
              <p className={styles.chatQuestion}>생성할 노래에 반영할 스타일들을 입력해주세요.</p>
              {musicstyle && <p className={styles.chatAnswer}>{musicstyle}</p>}
            </div>
          )}
          {step > 2 && (
            <div className={styles.chatMessage}>
              <p className={styles.chatQuestion}>만들어질 노래 제목을 입력해주세요.</p>
              {title && <p className={styles.chatAnswer}>{title}</p>}
            </div>
          )}
        </div>

        {/* 입력창 */}
        {step < 4 && (
            <input
              type="text"
              placeholder={getCurrentQuestion()}
              className={styles.input}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // 'Enter' 처리
            />
        )}

        {/* 생성 버튼: 입력이 완료되면 활성화 */}
        {step === 4 && (
          <button className={styles.sendbutton} onClick={handleCreate}>
            생성
          </button>
        )}
      </div>
    </div>
  );
}
