import React from 'react';

class UserDropdown extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {open: false};
    this.container = React.createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount(){
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(){
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if(this.container.current && !this.container.current.contains(event.target)){
      this.setState({
        open: false
      });
    }
  }

  handleButtonClick() {
    this.setState({
        open: !this.state.open
      });
  }


  render() {
  const { currentUser, userFirstLetter, logout } = this.props;

    return (
      <div className='user-icon-container' ref={this.container} >
        <button type = 'button' className='user-icon' onClick = {this.handleButtonClick}>{userFirstLetter}</button>
        {this.state.open && <ul className='user-icon-dropdown'>
          <li><button type = 'button' className = 'user-icon user-subicon' >{userFirstLetter}</button>
            <p>
              <span className = 'dropdown-username'>{currentUser.username}</span>
              <br /> 
              <span className = 'dropdown-email'>{currentUser.email}</span>
            </p>
          </li>
          <li>
            <button type = 'button' className = 'dropdown-logout' onClick={logout}>Log out</button>
          </li>
        </ul>}
      </div>
    )
  } 
}

export default UserDropdown;