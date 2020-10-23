import { connect } from 'react-redux';
import VideoForm from './video_form';

const mS2P = (state) => {
  return {
    title: "",
    videoFile: null,
    videoUrl: null,
    thumbnailFile: null,
    thumbnailUrl: null,
    uploader_id: state.session.id
  };
}


export default connect(mS2P)(VideoForm);