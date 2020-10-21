import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = (props) => {
  const { video } = props;
  return (
        <li>
          <Link to={`/videos/${video.id}`}>
          <img className = "video-thumbnail" src={video.thumbnailURL} />
          <div className = "video-title">{video.title}</div>
          <div className = "video-uploader">Uploaded by {video.uploader.username}</div>
          </Link>
        </li>
  )
}

export default VideoIndexItem;