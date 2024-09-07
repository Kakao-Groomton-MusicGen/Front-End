import styles from "./top.module.css"
import Link from "next/link"
import Image from "next/image"
import mascot from "../../../public/image/mascot.png"
import mute from "../../../public/image/mute.png"

export default function Topbar() {
    return (
        <div className={styles.container}>
            <Image
                src={mascot}
                className={styles.component}
                alt="마스코트 아이콘"
                width={80}
                height={70}
                priority
            />
            <Image
                src={mute}
                className={styles.component}
                alt="뮤트"
                width={130}
                height={60}
            />
            <Link href="/home" legacyBehavior>
                <a className={styles.textbutton}>Make</a>
            </Link>
            <Link href="/board" legacyBehavior>
                <a className={styles.textbutton}>Others</a>
            </Link>
        </div>
    )
}
