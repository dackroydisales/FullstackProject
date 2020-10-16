import { connect } from 'react-redux';
import SearchBar from './searchbar'

const mapStateToProps = (state = {}) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);