import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className='logo-content'>
        <img className='nutube-logo' src={window.tubelogoURL}/>
        <div className="nutube-text">NuTube</div>
      </h1>
    </Link>
  )
}

export default Logo;