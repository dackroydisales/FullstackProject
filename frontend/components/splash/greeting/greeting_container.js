import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Greeting from './greeting';

const mapS2Ps = ({session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  }

};

const mapD2Ps = dispatch => {
  return ({
    logout: () => dispatch(logout())
  })
};

export default connect(mapS2Ps, mapD2Ps)(Greeting);