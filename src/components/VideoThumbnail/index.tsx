import { Dispatch, SetStateAction } from "react";
import { Video } from "../../classes/video";
import styles from './VideoThumbnail.module.css'
import { EditOutlined, DeleteForeverOutlined } from '@mui/icons-material'

type VideoThumbnailProps = {
    video: Video,
    setCurrentVideo: Dispatch<SetStateAction<Video>>,
    openEditModal: (a: Video) => void
}

export default function VideoThumbnail({ video, setCurrentVideo, openEditModal }: VideoThumbnailProps) {
    return (
        <div className={`${styles.card} ${styles[`cat${video.category}`]}`}>
            <div className={styles.thumb} onClick={() => setCurrentVideo(video)}>
                <div className={styles.glow}></div>
                <img className={styles.img} src={video.imagePath} alt={video.title} />
            </div>
            <footer className={styles.toolbar}>
                <button onClick={() => openEditModal(video)} className={styles.button}>
                    <EditOutlined /> Editar
                </button>
                <button className={styles.button}>
                    <DeleteForeverOutlined /> Deletar
                </button>
            </footer>
        </div>
    )
}