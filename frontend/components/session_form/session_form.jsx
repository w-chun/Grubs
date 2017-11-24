import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.formType === 'login' ?
    {
      username: "",
      password: ""
    } : {
      username: "",
      email: "",
      password: "",
      img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_50/v1511461159/765-default-avatar_zsj3xt.png"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount (){
    this.props.clearErrors();
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

  handleErrors(){
    return (e) => {
      e.preventDefault();
      this.props.clearErrors();
    };
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
     return (
        <div className="errors">
          <ul className="list-errors">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
          <div className="close-errors">
            <div className="close-button" onClick={this.handleErrors()}>&times;</div>
          </div>
        </div>
      );
    }
  }

  handleDemo() {
    return (e) => {
      e.preventDefault();
      this.setState({username: "demo", password: "password"}, () => {
        const user = Object.assign({}, this.state);
        this.props.processForm(user, 'login');
      });
    };
  }

  loginDemo(){
    return(e) => {
      e.preventDefault();
      const user = {username: "demo", password: "password"};
      this.props.processForm(user, 'login');
    };
  }

  render(){
    let button;
    let message;
    let navLogin;
    let navSignup;
    let emailForm;
    let demoLogin;
    if (this.props.formType === "signup") {
      button = 'Sign Up';
      message = 'Sign Up for Grubs';
      emailForm = (
          <input type="text"
          value={this.state.email}
          onChange={this.update("email")}
          placeholder="Email" />
      );
      navLogin = (<p>Already on Grubs? <Link className="nav-login-link" to='/login'>Log In</Link></p>);
      demoLogin = <button className="demo-login" onClick={this.loginDemo()}>Demo Login</button>;
    } else {
      button = 'Log In';
      message = 'Log In to Grubs';
      navSignup = (<p>New to Grubs? <Link className="nav-login-signup" to='signup'>Sign Up</Link></p>);
      demoLogin = <button className="demo-login" onClick={this.handleDemo()}>Demo Login</button>;
    }
    return (
      <div className="session-form-container">
        <header className="nav-bar">
          <div className="grubs-link">
            <h1><Link to="/" className="title">Grubs</Link></h1>
          </div>
        </header>
        {this.renderErrors()}
        <div className="session-form">
          <div className="login-form-container">
              <div className="login-form">
                <h2 className="message">{message}</h2>
                <div className="nav-login" onClick={this.handleErrors}>{navLogin}</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      placeholder="Username" />
                    {emailForm}
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      placeholder="Password" />

                    <input type="submit" value={button} className="button"/>
                    {demoLogin}
                </form>
                <div className="nav-signup" onClick={this.handleErrors}>{navSignup}</div>
              </div>
            </div>
            <div className="session-img">
              <img src="http://res.cloudinary.com/dih798zsl/image/upload/v1511460944/signup_illustration_gjosky.png"></img>
            </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
