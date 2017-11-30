import { connect } from 'react-redux';
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
    fetchImages: (businessId) => dispatch(fetchImages(businessId)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessImages);
