import { 
  RECEIVE_VIDEO_ERRORS,
  RECEIVE_VIDEO } from '../actions/video_actions';

  const videoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.errors || []; //NB: added || result of clearErrors() in video_form submitting no arguments
    case RECEIVE_VIDEO:
      return [];
      default:
      return state;
  }
};

export default videoErrorsReducer;