import { RECEIVE_VIDEO_COMMENTS } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state); //NB: refactor later
  switch (action.type) {
    case RECEIVE_VIDEO_COMMENTS:
      nextState = action.commentIndex;
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;
