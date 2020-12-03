import React from 'react';
import Navbar from '../splash/navbar';
import VideoIndexContainer from '../video_index/video_index_container'

class SearchPage extends React.Component {
  render()
  {
  return (
    <div className="splash-page-container">
      <Navbar/>
      <VideoIndexContainer key={this.props.match.params.s_term} search={this.props.match.params.s_term}/>
    </div>
    )
  }
}

export default SearchPage;