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
    let url;
    if (images.length === 0) {
      url = "";
    } else {
      url = images[0].props.children.props.src;
    }
    var sectionStyle = {
      backgroundImage: "url(" + url + ")",
      width: "100%",
      zIndex: "-1",
      position: "absolute",
      borderBottom: "1px solid #e6e6e6",
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.8

    };
    return (
      <div className="business-images-wrapper" style={ sectionStyle }>
        <div className="business-images-container">
        </div>
      </div>
    );
  }
}
