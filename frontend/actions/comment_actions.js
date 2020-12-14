export const RECEIVE_VIDEO_COMMENTS = "RECEIVE_VIDEO_COMMENTS";

export const receiveCommentIndex = commentIndex => {
  return ({
    type: RECEIVE_VIDEO_COMMENTS,
    commentIndex
  });
}

export const createComment = comment => dispatch => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment}
  }).then(commentIndex => dispatch(receiveCommentIndex(commentIndex)));
}

export const updateComment = comment => dispatch => {
  return $.ajax({
    method: "PUT",
    url: `/api/comments/${comment.id}`,
    data: { comment },
  }).then((commentIndex) => dispatch(receiveCommentIndex(commentIndex)));
};

export const deleteComment = (comment) => (dispatch) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${comment.id}`,
    data: { comment },
  }).then((commentIndex) => dispatch(receiveCommentIndex(commentIndex)));
};

export const getVideoComments = (videoId) => dispatch => {
  return $.ajax({
    url: "/api/comments",
    method: "GET",
    data: {video_id: videoId}
  }).then((commentIndex) => dispatch(receiveCommentIndex(commentIndex)));
};