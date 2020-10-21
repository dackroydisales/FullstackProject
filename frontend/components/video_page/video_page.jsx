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
          <video controls className = "video-show" src={video.videoURL} />
          <div className = "video-title">{video.title}</div>
          <div className = "video-uploader">Uploaded by {video.uploader.username}</div>
          </div>
      </div>
      )
    }
}

export default VideoPage;