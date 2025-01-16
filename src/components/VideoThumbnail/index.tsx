import { Video } from "../../classes/video";
import styles from './VideoThumbnail.module.css'
import { EditOutlined, DeleteForeverOutlined } from '@mui/icons-material'

export default function VideoThumbnail({ video }: { video: Video }) {
    return (
        <div className={`${styles.card} ${styles[`cat${video.category}`]}`}>
            <div className={styles.thumb}>
                <div className={styles.glow}></div>
                <img className={styles.img} src={video.imagePath} alt={video.title} />
            </div>
            <footer className={styles.toolbar}>
                <button className={styles.button}>
                    <EditOutlined /> Editar
                </button>
                <button className={styles.button}>
                    <DeleteForeverOutlined /> Deletar
                </button>
            </footer>
        </div>
    )
}