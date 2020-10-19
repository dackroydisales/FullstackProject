import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdownContainer from './user_dropdown/user_dropdown_container';

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
      <UserDropdownContainer 
        currentUser = {currentUser} 
        userFirstLetter = {currentUser.username.toUpperCase().charAt(0)} 
        logout = {logout}/>
    )
  };

  //if logged in then personalGreeting(); else sessionLinks();
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;