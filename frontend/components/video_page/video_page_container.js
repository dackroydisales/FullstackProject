import { connect } from 'react-redux';
import { getVideo } from '../../actions/video_actions';
import VideoPage from './video_page';

const mapStateToProps = ({entities: {videos = {} }}) => {
  return {
    videos: videos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getVideo: (videoId) => dispatch(getVideo(videoId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);