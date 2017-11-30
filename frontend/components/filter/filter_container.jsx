import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Filter from './filter';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter));
