import React from 'react';
import Slider from 'react-slick';

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
    return (
      <div className="business-images-wrapper">
        <div className="business-images-container">
        <Slider settings={
          {dots: true,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear'}
          }>
            {images}
        </Slider>
        </div>
      </div>
    );
  }
}
