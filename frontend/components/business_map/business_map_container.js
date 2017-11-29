import { connect } from 'react-redux';
import BusinessMap from './business_map';
import { asArray } from '../../reducers/selectors';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  let businesses;
  if (Object.keys(state.entities.businesses).length > 0) {
    businesses = asArray(state.entities);
  }
  return {
    businesses
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessMap);
