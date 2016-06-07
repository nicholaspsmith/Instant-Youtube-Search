import React from 'react'
import VideoSingle from './video_single'

const VideoList = (props) => {
  const videoItems = props.videos.map( video => {
    return (
      <VideoSingle
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
  }) 

  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;