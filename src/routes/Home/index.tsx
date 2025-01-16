import { useContext } from "react";
import { VideosContext } from "../../App";
import VideoCategory from "../../components/VideoCategory";
import VideoThumbnail from "../../components/VideoThumbnail";
import { Category } from "../../classes/video";
import styles from './Home.module.css'

export default function Home() {
    const videos = useContext(VideosContext)
    const categoryIndices = [
        ...Array(
            Object.keys(Category).length / 2
        ).keys()
    ]

    return (
        <main className={styles.categories}>
            {categoryIndices.map((category, categoryIndex) => (
                <VideoCategory type={category} key={categoryIndex}>
                    {videos.map((video, videoIndex) => {
                        if (video.category === category)
                            return <VideoThumbnail video={video} key={videoIndex}></VideoThumbnail>
                    })}
                </VideoCategory>
            ))}
        </main>
    )
}