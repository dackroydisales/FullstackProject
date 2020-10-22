import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getVideoIndex();
  }

  render() {
    let { videos } = this.props;
    if(!videos) {return null;}
    return (
    <ul className="video-index">
      {Object.values(videos).map(video => (
        <VideoIndexItem video={video} key={video.title} />
      ))}
    </ul>
    )
  }

}

export default VideoIndex;