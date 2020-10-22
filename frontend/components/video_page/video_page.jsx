import React from 'react';
import Navbar from '../splash/navbar';

class VideoPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getVideo(this.props.match.params.videoId);
  }

  render() {
    const video  = this.props.videos[this.props.match.params.videoId];
    return video === undefined ? null : (
      <div className="video-show-page-container">
        <Navbar/>
        <div className = 'video-show-container'>
          <video autoPlay controls width="640" height="360" poster = {video.thumbnailURL} className = "video-show" src={video.videoURL} />
          <div className = "video-description-container">
            <div className = "video-title-show">{video.title}</div>
            <div className = "video-uploader-show">{video.uploader}</div>
          </div>
          </div>
      </div>
      )
    }
}

export default VideoPage;