import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <h1 className = {`logo-content-container-${props.componentName}`}>
      <Link to="/" className='logo-content'>
        <img className='nutube-logo' src={window.tubelogoURL}/>
        <div className="nutube-text">NuTube</div>
      </Link>
    </h1>
  ) 
}

export default Logo;