import { useContext, useState } from "react";
import { VideosContext } from "../../App";
import VideoCategory from "../../components/VideoCategory";
import VideoThumbnail from "../../components/VideoThumbnail";
import { Category, Video } from "../../classes/video";
import styles from './Home.module.css'
import YouTube from "react-youtube";
import EditModal from "../../components/EditModal";

export default function Home() {
    const videos = useContext(VideosContext)
    const categoryIndices = [
        ...Array(
            Object.keys(Category).length / 2
        ).keys()
    ]
    const [currentVideo, setCurrentVideo] = useState(videos[0])
    const [editingVideo, setEditingVideo] = useState(videos[0])
    const [isOpen, setIsOpen] = useState(false)

    function open(video: Video) {
        setEditingVideo(video)
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    
    const options = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 1,
        }
    }

    function onReady(event: any) {
        event.target.pauseVideo()
    }

    return (
        <>
            <EditModal selectedVideo={editingVideo} isOpen={isOpen} close={close}></EditModal>
            <header className={styles.header}>
                <img src={currentVideo.imagePath} alt="Capa do vídeo" className={styles.backdrop} />
                <div className={styles['focused-video']}>
                    <div className={styles['video-information']}>
                        <h1 className={`${styles['category-card']} ${styles[`cat${currentVideo.category}`]}`}>{Category[currentVideo.category]}</h1>
                        <h2 className={styles['video-title']}>{currentVideo.title}</h2>
                        <p className={styles['video-description']}>{currentVideo.description}</p>
                    </div>
                    <div className={`${styles['video-player']} ${styles[`cat${currentVideo.category}`]}`}>
                        <YouTube videoId={currentVideo.videoUrl} options={options} onReady={onReady} id='video' />
                    </div>
                </div>
            </header>
            <main className={styles.categories}>
                {categoryIndices.map((category, categoryIndex) => (
                    <VideoCategory type={category} key={categoryIndex}>
                        {videos.map((video, videoIndex) => {
                            if (video.category === category)
                                return <VideoThumbnail video={video} setCurrentVideo={setCurrentVideo} openEditModal={() => open(video)} key={videoIndex} />
                        })}
                    </VideoCategory>
                ))}
            </main>
        </>
    )
}