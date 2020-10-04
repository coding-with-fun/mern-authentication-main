import React, { Component } from "react";
import logo from "../assets/SignUp.svg";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup__form">
        <div className="form__logo">
          <img src={logo} alt="Sign Up" />
        </div>
        <div className="main__form">
          <div className="form_fields">
            <p>Create new account</p>
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Name"
              className="mb-3"
              autoFocus
            />
            <input
              type="email"
              name="email_id"
              id="email_id"
              placeholder="Email address"
              className="mb-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="mb-3"
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              className="mb-3"
            />
            <div className="submit__button">Sign In</div>
          </div>
        </div>
      </div>
    );
  }
}
