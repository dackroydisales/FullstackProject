import { connect } from 'react-redux';
import { createVideo, receiveVideoErrors } from '../../actions/video_actions';
import VideoForm from './video_form';

const mS2P = (state) => {
  return {
    uploader_id: state.session.id,
    errors: state.errors.video
  };
}

const mD2P = dispatch => {
  return {
    createVideo: (video) => dispatch(createVideo(video)),
    clearErrors: () => dispatch(receiveVideoErrors([])),
  };
}

export default connect(mS2P, mD2P)(VideoForm);