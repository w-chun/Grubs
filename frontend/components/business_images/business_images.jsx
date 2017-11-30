import React from 'react';

export default class BusinessImages extends React.Component {
  componentWillMount() {
    this.props.fetchImages(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps) {
    this.props.fetchBusiness(newProps.match.params.businessId);
  }

  render() {
    const images = this.props.images.map((image,i) => {
      return (
        <div key={`image-${i}`}><img src={`${image.img_url}`}/></div>
      );
    });
  }
}
