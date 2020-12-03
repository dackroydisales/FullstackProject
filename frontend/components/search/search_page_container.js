import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = (state = {}) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);