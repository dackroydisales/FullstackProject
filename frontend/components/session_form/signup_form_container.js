import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';


const mS2P = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Sign in</Link>,
  };
}

const mD2P = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
}

export default connect(mS2P, mD2P)(SessionForm);