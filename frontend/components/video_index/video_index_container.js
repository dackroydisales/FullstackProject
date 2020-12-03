import { connect } from 'react-redux';
import { getVideoIndex } from '../../actions/video_actions';
import VideoIndex from './video_index';

// const mS2P = ({entities: {videos = {} }}) => {

const mS2P = (state) => {
  return {
    videos: state.entities.videos
  };
}

const mD2P = dispatch => {
  return {
    getVideoIndex: (search) => dispatch(getVideoIndex(search))
  };
}

export default connect(mS2P, mD2P)(VideoIndex);