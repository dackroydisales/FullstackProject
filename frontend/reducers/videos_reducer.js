import { RECEIVE_VIDEO_INDEX, RECEIVE_VIDEO } from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);//NB: refactor later
  switch (action.type) {
    case RECEIVE_VIDEO_INDEX:
      return action.videoIndex;
    case RECEIVE_VIDEO:
      nextState[action.video.id] = action.video;
      return nextState;
      default:
      return state;
  }
}

export default videosReducer;