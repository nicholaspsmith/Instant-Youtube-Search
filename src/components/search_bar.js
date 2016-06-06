import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term})
    this.props.searchYoutube(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar"
          type="text" 
          placeholder="Youtube search"
          value={this.state.term}
          onChange={ e => this.onInputChange(e.target.value) } />
      </div>
    )
  }
}

export default SearchBar