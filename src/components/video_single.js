import React, { Component } from 'react'

class VideoSingle extends Component {
  render() {
    const video = this.props.video
    const imageUrl = video.snippet.thumbnails.default.url
    return (
      <li key={video.etag} className="list-group-item col-lg-3 col-sm-4">
        <div className="video-list media">
          <div className="media-top">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-bottom">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoSingle