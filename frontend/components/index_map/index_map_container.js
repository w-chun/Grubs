import { connect } from 'react-redux';
import IndexMap from './index_map';
import { asArray } from '../../reducers/selectors';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  const businesses = Object.keys(state.entities.businesses).map(key => (
    state.entities.businesses[key]
  ));
  return {businesses};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexMap);
