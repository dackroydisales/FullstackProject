import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = (state = {}) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);