import { connect } from 'react-redux';
import { getVideoIndex } from '../../actions/video_actions';
import {createComment, deleteComment, updateComment, getVideoComments} from '../../actions/comment_actions';
import VideoPage from './video_page';

const mapStateToProps = (state) => {
  return {
    videos: state.entities.videos,
    comments: state.entities.comments,
    userId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVideoIndex: (videoId) => dispatch(getVideoIndex()),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    getVideoComments: (videoId) => dispatch(getVideoComments(videoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);