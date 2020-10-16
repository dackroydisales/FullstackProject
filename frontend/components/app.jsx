import React from "react";
import { Route, Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

//NB: also functional component
const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1 className='logo-content'>
            <img className='nutube-logo' src={window.tubelogoURL}/>
            <div className="nutube-text">NuTube</div>
        </h1>
      </Link>
      <form className='video-search'>
        <input type='text' className='video-search-text' placeholder='Search'/>
        <div className="video-search-image-div">
          <input type='image' className='video-search-image' src={window.searchlogoURL}></input>
        </div>
      </form>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
