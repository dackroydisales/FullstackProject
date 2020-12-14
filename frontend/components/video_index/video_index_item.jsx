import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = (props) => {
  const { video } = props;
  return (
        <li>
          <Link to={`/videos/${video.id}`}>
            <img className = {props.scrollable ? "video-scroll-thumbnail" : "video-thumbnail"} src={video.thumbnailURL} />
            <div className =  {props.scrollable ? "video-scroll-title-index" :"video-title-index"}>{video.title}</div>
            <div className =  {props.scrollable ? "video-scroll-uploader-index" : "video-uploader-index"}>{video.uploader}</div>
          </Link>
        </li>
  )
}

export default VideoIndexItem;