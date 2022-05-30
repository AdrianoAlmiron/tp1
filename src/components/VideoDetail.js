import React from 'react'
import Loader from './loading'

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{ marginTop: '300px' }}>
        <Loader />
      </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="Videoprincipal">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="Detail">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
    
  )
}

export default VideoDetail