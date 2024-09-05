import styles from "./top.module.css"
import Link from "next/link"

export default function topbar(){
    return(
        <div className={styles.container}>
            <a className={styles.component}>groomthon</a>
            <Link href="/home" legacyBehavior>
                <a className={styles.component}>생성</a>
            </Link>
            <Link href="/board" legacyBehavior>
                <a className={styles.component}>게시</a>
            </Link>
        </div>
    )
}