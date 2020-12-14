import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.search)
    {
      this.props.getVideoIndex(this.props.search);
    }
    else
    {
      this.props.getVideoIndex();
    }
  }

  // componentDidUpdate(){
  //   if(this.props.search && this.state.prev_search !== this.props.search)
  //   {
  //     this.props.getVideoIndex(this.props.search);
  //   }
  //   else
  //   {
  //     this.props.getVideoIndex();
  //   }
  // }

  render() {
    let { videos } = this.props;
    if(!videos) {return null;}
    return (
    <div className={this.props.scrollable ? "video-scroll-container" : null}>
    {this.props.scrollable ? <div className='video-scroll-header'>More Videos</div> : null}
    <ul className={this.props.scrollable ? "video-scroll" : "video-index"}>
      {Object.values(videos).map(video => (
        <VideoIndexItem video={video} key={video.title} scrollable={this.props.scrollable}/>
      ))}
    </ul>
    </div>
    )
  }

}

export default VideoIndex;