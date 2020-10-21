export const RECEIVE_VIDEO_INDEX = "RECEIVE_VIDEO_INDEX";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

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


//thunk action creators
//AKA TACs

export const getVideoIndex = () => dispatch => {
  // NB: handle expected signup errors
  return $.ajax({
    method: 'GET',
    url: '/api/videos'
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
