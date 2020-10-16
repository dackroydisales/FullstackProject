import React from 'react';
import { Link } from 'react-router-dom';

//NB: takes in props via greeting_container
//AKA: automating destructring

const Greeting = ({currentUser, logout }) => {
  //helper method
  const sessionLinks = () => {
    return (
      <nav className='login-signup'>
        <Link to='/login'>Login</Link>
        &nbsp;or&nbsp;
        <Link to='/signup'>Sign Up!</Link>
      </nav>
    )
  };

  const personalGreeting = () => {
    return (
      <hgroup className='header-group'>
        <h2 className='header-name'>Hi, {currentUser.username}!</h2>
        <button className='header-button' onClick={logout}>Log Out</button>
      </hgroup>
    )
  };

  //if logged in then personalGreeting(); else sessionLinks();
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;