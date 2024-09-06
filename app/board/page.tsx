"use client";

import { useState } from "react";
import Top from "../(common)/(component)/(topbar)/top";
import styles from "./board.module.css";

interface Song {
    id: number;
    userId: string;
    title: string;
    url: string;
    isVisible: boolean;
}

export default function Board() {
    const [songs, setSongs] = useState<Song[]>([
        { id: 1, userId: "user123", title: "Sunny Day Sound", url: "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Sunny+Day+Sound.mp3", isVisible: false },
        { id: 2, userId: "user456", title: "Rainy Evening Sound", url: "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Rainy+Evening+Sound.mp3", isVisible: false }
    ]);

    const toggleVisibility = (id: number) => {
        const updatedSongs = songs.map(song => song.id === id ? { ...song, isVisible: !song.isVisible } : song);
        setSongs(updatedSongs);
    };

    return (
        <div className={styles.container}>
            <Top />
            <div className={styles.lowcontainer}>
                {songs.map(song => (
                    <div key={song.id}>
                        <div onClick={() => toggleVisibility(song.id)} className={styles.songTitle}>
                            <span>{song.userId}</span> <span>{song.title}</span>
                        </div>
                        {song.isVisible && (
                            <div className={styles.songDetails}>
                                <audio controls>
                                    <source src={song.url} type="audio/mp3" />
                                </audio>
                                <a href={song.url} download={`${song.title}.mp3`}>
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
