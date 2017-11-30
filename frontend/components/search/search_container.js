import { connect } from 'react-redux';
import Search from './search';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state) => {
  
};

const mapDispatchToProps = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
