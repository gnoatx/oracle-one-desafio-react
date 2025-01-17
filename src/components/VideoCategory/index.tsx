import { Category } from "../../classes/video"
import styles from './VideoCategory.module.css'
import { ReactNode } from 'react'

type VideoCategoryProps = {
    type: number,
    children: ReactNode
}

export default function VideoCategory({ type, children }: VideoCategoryProps) {
    return (
        <section className={styles.section}>
            <header className={styles.nameplate} id={styles[`cat${type}`]}>
                <h2 className={styles.title}>{Category[type]}</h2>
            </header>
            <div className={styles.thumbnails}>
                {children}
            </div>
        </section>
    )
}