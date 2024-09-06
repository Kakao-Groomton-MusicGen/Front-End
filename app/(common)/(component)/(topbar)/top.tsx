import styles from "./top.module.css"
import Link from "next/link"
import Image from "next/image"
import temu from "../../../public/image/KakaoTalk_Photo_2024-09-06-11-43-26.png"

export default function topbar(){
    return(
        <div className={styles.container}>
            <Image
            src={temu}
            className={styles.component}
            alt="테무"
            width={80}
            height={80}
            />
            <Link href="/home" legacyBehavior>
                <a className={styles.component}>생성</a>
            </Link>
            <Link href="/board" legacyBehavior>
                <a className={styles.component}>게시</a>
            </Link>
        </div>
    )
}