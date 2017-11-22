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
    const user = this.state;
    this.props.processForm({user}, this.state.formType);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log in</Link>;
    }
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render(){
    const {formType} = this.props;
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
      navLogin = (<p>Already on Grubs? <Link to='/login'>Log In</Link></p>);
    } else {
      button = 'Log In';
      message = 'Log In to Grubs';
      navSignup = (<p>New to Grubs? <Link to='signup'>Sign Up</Link></p>);
    }
    return (
      <div className="login-form-container">
        <Link to="/">Home</Link>
        <h2>{message}</h2>
        {navLogin}
        <form onSubmit={this.state.handleSubmit} className="login-form-box">
          <div className="login-form">
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

            <input type="submit" value={button} />
          </div>
        </form>
        {navSignup}
      </div>

    );
  }
}

export default SessionForm;
