import React from 'react';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      near: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   var input = document.getElementById('autocomplete');
  //   var options = {
  //     types: ['(cities)'],
  //     componentRestrictions: {country: 'usa'}
  //   };
  //   var autocomplete = new google.maps.places.Autocomplete(input, options);
  //   autocomplete.addListener('place_changed', function(){
  //     var place = autocomplete.getPlace();
  //     var city = place.formatted_address.split(",")[0];
  //     input.value = city;
  //   });
  // }

  update(field) {
      return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBusinesses(this.state)
      .then(this.props.history.push(`/businesses?near=${this.state.near}`));
  }

  clearSearch() {
    this.props.clearSearch();
  }

  render() {
    return (
      <form className="search-bar">
        <input onChange={this.update("near")} value={this.state.near} placeholder="Search by location" id='autocomplete'></input>
        <button onClick={this.handleSubmit} className="search-icon">
          <img src="https://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_25/v1512001142/search-icon-white-one-hi_lw3har.png" />
        </button>
      </form>
    );
  }
}
