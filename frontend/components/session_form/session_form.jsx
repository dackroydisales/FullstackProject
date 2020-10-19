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

  renderErrors(field) {
    return(
      <div>
      {this.props.errors.map((error, i) =>
          (
            error.toLowerCase().includes(field) ? error: null
          )
      )}
      </div>
    );
  }

    render() {
    return (
      <div className = 'session-center'>
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <Logo componentName='signin' />
          <br/>
          <br/>
          <p className = 'signin-form-description'>{this.formattedType()}</p>
          <br/>
          <br/>
          <br/>
          <div className="signin-form-fields">
            <br/>
            {this.props.formType === 'signup' ? (
            <div>
              <label>
                <input type="text" placeholder='Username'
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signin-username"
                />
              </label>
            <div className='session-form-errors'>{this.renderErrors('username')}</div>
            <br/>
            </div>) : <span></span> }

            <label>
              <input type="text" placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-email"
              />
            </label>
            <div className='session-form-errors'>{this.renderErrors('email')}</div>
            <br/>
            <label>
              <input type="password" placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-password"
              />
            </label>
            <div className='session-form-errors'>{this.renderErrors('password')}</div>
            <br/>
            <span>
            <input className="session-submit" type="submit" value={this.formattedType()}/>
              <div className='session-form-link'>{this.props.navLink}</div>
            </span>
            <br/>
            <span>
            <br/>
            {this.props.formType === 'signin' ? (
              <span>
              <button type='button' className ='demo-signin' onClick={this.demoSignIn}>Demo sign in</button>
              </span>) : <span></span> }
            <br/>
            </span>
          </div>
          <br/>
        </form>
        <br/>
      </div>
      </div>
    );
  }

}

export default SessionForm;