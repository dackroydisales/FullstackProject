import { connect } from 'react-redux';
import { getVideoIndex } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mS2P = ({entities: {videos = {} }}) => {
  return {
    videos: videos
  };
}

const mD2P = dispatch => {
  return {
    getVideoIndex: () => dispatch(getVideoIndex())
  };
}

export default connect(mS2P, mD2P)(VideoIndex);