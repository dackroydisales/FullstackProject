import React from 'react';
import Logo from './logo';
import SearchbarContainer from './searchbar/searchbar_container';
import GreetingContainer from './greeting/greeting_container';

class Navbar extends React.Component {

  render()
  {
  return (
    <div className = 'nutube-header'>
      <Logo componentName='splash'/>
      <SearchbarContainer />
      <GreetingContainer />
    </div>
  )
  }
}

export default Navbar;