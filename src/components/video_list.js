import React, { Component } from 'react'
// import VideoSingle from './video_single'

class VideoList extends Component {
  render() {
    const videos = this.props.state.videos.map(function(video){
      return <li>video</li>
    })
    return (
      <ul>
        {videos}
      </ul>
    )
  }
}

export default VideoList