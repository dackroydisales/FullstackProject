import { RECEIVE_VIDEO_LIKES } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state); //NB: refactor later
  switch (action.type) {
    case RECEIVE_VIDEO_LIKES:
      nextState = action.likeIndex;
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;
