import React from 'react';
import Navbar from './navbar';
import VideoIndexContainer from '../video_index/video_index_container'

const SplashPage = () => {
  return (
    <div className="splash-page-container">
      <Navbar/>
      <VideoIndexContainer/>
    </div>
    )
}

export default SplashPage;