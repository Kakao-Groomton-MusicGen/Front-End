"use client"

import Top from "../(common)/(component)/(topbar)/top";
import styles from "./boad.module.css"

export default function board(){
    return(
        <div className={styles.container}>
            <Top/>
            <h1 className={styles.lowcontainer}>2</h1>
        </div>
    );
}