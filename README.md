# Grubs

Grubs is a Yelp inspired clone that allows users to search for restaurants in certain locations and see what others have to say about the restaurant. In order for a user to write a review, the user has to login or sign up.

[Check out Grubs](https://grubs-for-you.herokuapp.com/#/)

## Table of Contents

- [Technology](#technology)
- [Features](#features)
- [Maintainers](#maintainers)
- [License](#license)

## Technology

Grubs is a single-page web application that uses React and Redux for the frontend and Ruby on Rails and Postgresql for the backend. Google API is used to pinpoint the locations for each restaurant.

## Features

### Homepage

![Homepage](https://github.com/w-chun/Grubs/blob/master/screenshots/Home%20Page.png)

Grubs homepage allows a user to search for restaurants by location or check out all the restaurants available. A user has the option to login to Grubs or create a new account.

### Search

![Search](https://github.com/w-chun/Grubs/blob/master/screenshots/Search%20Page.png)

Grubs search results page shows a list of all the restaurants or filters by the location inputted by the user. The map pinpoints the results found from the search and can be zoomed in to see where the restaurant is near or zoomed out to see other restaurants in other cities.

```
//search.jsx

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
      .then(this.props.history.push(`/businesses?near=${this.state.near}`));
  }

  clearSearch() {
    this.props.clearSearch();
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

```

Implementing the search component came with some difficulty. The search results would create the right action of fetching restaurants with a location matching the search parameter but it would still show all the restaurants on the search page. By pushing `/businesses?near=${this.state.near}` to `this.props.history`, the path was different than the exact path of `/businesses`, which will not trigger the fetch all restaurants on mount.

### Review

![Review](https://github.com/w-chun/Grubs/blob/master/screenshots/Review.png)

A Grubs user, when logged in has the option to add a new review to a restaurant, edit a previous review that the user left, or delete the review.


## Maintainers

[@w-chun](https://github.com/w-chun)


## License

ISC © 2017 Wilson
