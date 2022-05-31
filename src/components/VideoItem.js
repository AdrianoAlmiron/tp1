import "./style/VideoItem.css"
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item">
      <img
        className="item__img"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="item__info">
        <div className="item__title">{video.snippet.title} </div>
      </div>
    </div>
  )
}

export default VideoItem