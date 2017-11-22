import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.formType === 'login' ?
    {
      username: "",
      email: "",
      password: ""
    } : {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user, this.props.formType);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let button;
    let message;
    let navLogin;
    let navSignup;
    let emailForm;
    if (this.props.formType === "signup") {
      button = 'Sign Up';
      message = 'Sign Up for Grubs';
      emailForm = (
        <label>Email:
          <input type="text"
          value={this.state.email}
          onChange={this.update("email")} />
        </label>
      );
      navLogin = (<p>Already on Grubs? <Link className="nav-login-link" to='/login'>Log In</Link></p>);
    } else {
      button = 'Log In';
      message = 'Log In to Grubs';
      navSignup = (<p>New to Grubs? <Link className="nav-login-signup" to='signup'>Sign Up</Link></p>);
    }
    return (
      <div className="session-form-container">
        <header className="nav-bar">
          <div className="grubs-link">
            <h1><Link to="/" className="title">Grubs</Link></h1>
          </div>
        </header>
        <div className="session-form">
          <div className="login-form-container">
            {this.renderErrors()}
              <div className="login-form">
                <h2 className="message">{message}</h2>
                <div className="nav-login">{navLogin}</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <label>Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")} />
                    </label>
                    {emailForm}
                    <label>Password:
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")} />
                    </label>

                    <input type="submit" value={button} className="button"/>
                </form>
                <div className="nav-signup">{navSignup}</div>
              </div>
            </div>
            <div className="session-img">
              <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
            </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
