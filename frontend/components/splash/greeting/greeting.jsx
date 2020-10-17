import React from 'react';
import { Link } from 'react-router-dom';

//NB: takes in props via greeting_container
//AKA: automating destructring

const Greeting = ({currentUser, logout }) => {
  //helper method
  const sessionLinks = () => {
    return (
        <Link to='/login' className='session-login'>
          <img src={window.signinlogoURL}></img>
          <p>SIGN IN</p>
        </Link>
    )
  };

  const personalGreeting = () => {
    return (
      <div>
        <h1 className='user-icon'>{currentUser.username.toUpperCase().charAt(0)}</h1>
        <button className='header-button' onClick={logout}>Log Out</button>
      </div>
    )
  };

  //if logged in then personalGreeting(); else sessionLinks();
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;