import React, { Component } from 'react'
// import VideoSingle from './video_single'

class VideoList extends Component {
  render() {
    const videos = this.props.videos.map(function(video){
      console.log(video)
      return <li key={video.etag}>{video.snippet.title}</li>
    })
    return (
      <ul>
        {videos}
      </ul>
    )
  }
}

export default VideoList