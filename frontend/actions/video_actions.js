export const RECEIVE_VIDEO_INDEX = "RECEIVE_VIDEO_INDEX";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

//regular action creators
//AKA RACs

export const receiveVideoIndex = videoIndex => {
  return ({
    type: RECEIVE_VIDEO_INDEX,
    videoIndex
  });
}

export const receiveVideo = video => {
  return ({
    type: RECEIVE_VIDEO,
    video
  });
}

export const receiveVideoErrors = errors => {
  return ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
}


//thunk action creators
//AKA TACs

export const getVideoIndex = (search) => dispatch => {
  // NB: handle expected signup errors
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: {s_term: search}
  }).then(
      videoIndex => dispatch(receiveVideoIndex(videoIndex)));
};


export const getVideo = videoId => dispatch => {
  // NB: handle expected signup errors
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`,
  }).then(
      video => dispatch(receiveVideo(video)));
};

export const createVideo = video => dispatch => {
  return $.ajax({
    //TODO: move to video_actions.js
    url: "/api/videos",
    method: "POST",
    data: video,
    contentType: false,
    processData: false,
  }).then((video) => {return video.id;},
  err => dispatch(receiveVideoErrors(err.responseJSON)));
}
