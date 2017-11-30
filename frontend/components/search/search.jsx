import React from 'react';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      near: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBusinesses(this.state)
      .then(this.props.history.push("/businesses"));
  }

  render() {
    return (
      <form className="search-bar">
        <input onChange={this.update("near")} value={this.state.near} placeholder="Search by location"></input>
        <button onClick={this.handleSubmit} className="search-icon">
          <img src="http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_25/v1512001142/search-icon-white-one-hi_lw3har.png" />
        </button>
      </form>
    );
  }
}
