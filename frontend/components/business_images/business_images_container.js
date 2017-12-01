import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessImages from './business_images';
import { fetchImages } from '../../actions/image_actions';
import { fetchBusiness } from '../../actions/business_actions';
import { selectImages } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    images: selectImages(state, ownProps.match.params.businessId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchImages: (businessId) => dispatch(fetchImages(businessId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessImages));
