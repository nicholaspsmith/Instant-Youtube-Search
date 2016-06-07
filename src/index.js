import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
import SimpleYT from 'simple-youtube'
import config from '../config'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      videos: [],
      currentVideo: null
    }

    // Fetch some videos upon load
    this.searchYoutube('api keys javascript')
  }

  searchYoutube(term) {
    SimpleYT({
      key: config.youtube,
      number: 12,
      term
    }, (videos) => {
      this.setState({
        videos,
        currentVideo: videos[0]
      })
    })
  }

  render() {
    const searchYT = _.debounce((term) => this.searchYoutube(term),200)

    return (
      <div>
        <SearchBar searchYoutube={searchYT}/>
        <VideoDetail video={this.state.currentVideo} />
        <div className="container">
          <VideoList 
            onVideoSelect={currentVideo => this.setState({currentVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.entry'));
