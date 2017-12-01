import React from 'react';

export default class BusinessImages extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.business);
    this.props.fetchImages(this.props.match.params.businessId);
  }

  render() {
    const images = this.props.images.map((image,i) => {
      return (
        <div key={`image-${i}`} className="business-images">
          <img src={`${image.img_url}`}/>
        </div>
      );
    });
    return images;
  }
}
