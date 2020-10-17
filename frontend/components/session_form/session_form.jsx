import React from 'react';
import Logo from '../splash/logo'


class SessionForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignIn = this.demoSignIn.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

  demoSignIn(){
    const user = { email:"demo@demo.co", password: "123456"};
  //Explain: the demo SignIn button is only accessible when on the SignIn page
  //Ergo - processForm will be SignIn
    this.props.processForm(user);
  }

  formattedType(){
    return this.props.formType === "signin" ? 'Sign in' : "Sign up";
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
      <div className = 'session-center'>
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <Logo componentName='signin' />
          <br/>
          <p className = 'signin-form-description'>{this.formattedType()}</p>
          <div className="signin-form-fields">
            <br/>
            {this.props.formType === 'signup' ? (
            <div>
              <label>Username:&nbsp;
                <input type="text" placeholder='Username'
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signin-username"
                />
              </label>
            <br/></div>) : null }
            <label>Email: &nbsp;
              <input type="text" placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>
            <br/>
            <label>Password: &nbsp;
              <input type="password" placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.formattedType()}
            />
          </div>
          <br/>
        </form>
        {this.props.formType === 'signin' ? (
        <div>
        <button onClick={this.demoSignIn}>Demo sign in</button>
        </div>) : null }
            <div className='session-form-link'>{this.props.navLink}</div>
        <div className = "session-form-errors">{this.renderErrors()}</div>
      </div>
      </div>
    );
  }

}



export default SessionForm;