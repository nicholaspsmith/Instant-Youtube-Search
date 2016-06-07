import React from 'react'

// Functional stateless component
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-12">
      <iframe src={url} frameBorder="0" height="480" width="860"></iframe>
    </div>
  )
}

export default VideoDetail