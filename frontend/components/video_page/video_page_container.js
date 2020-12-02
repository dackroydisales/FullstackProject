import { connect } from 'react-redux';
import { getVideo } from '../../actions/video_actions';
import {createComment, getVideoComments} from '../../actions/comment_actions';
import VideoPage from './video_page';

const mapStateToProps = (state) => {
  return {
    videos: state.entities.videos,
    comments: state.entities.comments,
    userId: state.session.id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getVideo: (videoId) => dispatch(getVideo(videoId)),
    createComment: (comment) => dispatch(createComment(comment)),
    getVideoComments: (videoId) => dispatch(getVideoComments(videoId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);