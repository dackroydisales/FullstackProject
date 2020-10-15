import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';

const mS2P = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up instead</Link>,
  };
}

const mD2P = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
}

export default connect(mS2P, mD2P)(SessionForm);