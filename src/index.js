import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
// import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import config from '../config'

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      videos: []
    }

    // Fetch some videos upon load
    this.searchYoutube('api keys javascript')
  }

  searchYoutube(term) {
    YTSearch({key: config.youtube, term}, (videos) => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar searchYoutube={(term) => this.searchYoutube(term)}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
