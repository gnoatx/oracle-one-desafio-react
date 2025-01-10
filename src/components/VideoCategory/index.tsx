import { Category } from "../../classes/video"
import styles from './VideoCategory.module.css'

type VideoCategoryProps = {
    type: number,
    children: JSX.Element
}

export default function VideoCategory({ type, children }: VideoCategoryProps) {
    return (
        <section className={styles.section}>
            <div className={styles.nameplate}>
                <h2 className={styles.title}>{Category[type]}</h2>
            </div>
            <div className={styles.thumbnails}>
                {children}
            </div>
        </section>
    )
}