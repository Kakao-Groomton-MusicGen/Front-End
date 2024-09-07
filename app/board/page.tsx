"use client";

import { useState, useEffect } from "react";
import Top from "../(common)/(component)/(topbar)/top";
import styles from "./board.module.css";

interface Post {
  id: number;
  userId: string;
  title: string;
  url: string;
  isVisible: boolean;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]); // 게시글 상태

  // 서버에서 게시글 데이터를 가져오는 함수
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://temu-back.r-e.kr/posts", {
        method: "GET",
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPosts(data); // 가져온 게시글 데이터를 상태에 저장
      } else {
        console.error("게시글을 불러오지 못했습니다:", response.statusText);
      }
    } catch (error) {
      console.error("게시글 가져오는 중 오류 발생:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 게시글을 가져옴
  useEffect(() => {
    fetchPosts();
  }, []);

  const toggleVisibility = (id: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, isVisible: !post.isVisible } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.lowcontainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <div
              onClick={() => toggleVisibility(post.id)}
              className={styles.songTitle}
            >
              <span>{post.userId}</span> <span>{post.title}</span>
            </div>
            {post.isVisible && (
              <div className={styles.songDetails}>
                <audio controls>
                  <source src={post.url} type="audio/mp3" />
                </audio>
                <a href={post.url} download={`${post.title}.mp3`}>
                  <button type="button">Download</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
