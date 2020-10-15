import React from 'react';

class SessionForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(){
    const user = { email:"demo@demo.co", password: "123456"};
  //Explain: the demo login button is only accessible when on the login page
  //Ergo - processForm will be login
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

    render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to NuTube!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            {this.props.formType === 'signup' ? (
            <div>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-username"
                />
              </label>
            <br/></div>) : null }
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <br/>
        </form>
        {this.props.formType === 'login' ? (
            <div>
            <button onClick={this.demoLogin}>Demo Login</button>
            </div>) : null }

      </div>
    );
  }

}



export default SessionForm;