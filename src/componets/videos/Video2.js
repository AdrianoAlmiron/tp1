import { useState } from "react"
import { Container } from "../elements"
import VideoDetails from './video-details'


const Video = ({ src, title, description }) => {
    const [isWatched, setIsWatched] = useState(false)

    const handleWatchedVideo = () => {
        setIsWatched(true)
    }

    return (
        <Container>
            <video
                controls
                onEnded={handleWatchedVideo}
                style={{ 
                    width: '50%', 
                    display: 'flex',
            }}
            >
                    <source src={src} type="video/mp4" />
                </video>
                <VideoDetails
                isWatched={isWatched}
                title={title}
                description={description}
                />
        </Container>
    );
}

export default Video;