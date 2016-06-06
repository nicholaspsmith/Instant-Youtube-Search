import React, { Component } from 'react'
import VideoSingle from './video_single'

class VideoList extends Component {
  render() {
    const videos = this.props.videos.map(function(video){
      return <VideoSingle video={video} key={video.etag} />
    })
    return (
      <ul>
        {videos}
      </ul>
    )
  }
}

export default VideoList