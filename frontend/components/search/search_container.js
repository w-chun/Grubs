import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state) => {
  return {
    searchResults: state.entities.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBusinesses: (query) => dispatch(searchBusinesses(query))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
