import React, { Component } from "react";
import logo from "../assets/SignUp.svg";
import validateEmail from "../shared/emailValidation";

export default class SignUp extends Component {
  state = {
    displayName: "",
    emptyDisplayName: false,
    email: "",
    emptyEmail: false,
    invalidEmail: false,
    password: "",
    emptyPassword: false,
    confirmpass: "",
    emptyConfirmpass: false,
    diffPassword: false,
    shortPassword: false,
  };

  handleChange = (e) => {
    this.setState({
      [`${e.target.id}`]: e.target.value,
      emptyDisplayName: false,
      emptyEmail: false,
      invalidEmail: false,
      emptyPassword: false,
      emptyConfirmpass: false,
      diffPassword: false,
    });
  };

  handleSave = () => {
    const { displayName, email, password, confirmpass } = this.state;

    if (displayName === "") {
      this.setState({
        emptyDisplayName: true,
      });
    } else {
      if (email === "") {
        this.setState({
          emptyEmail: true,
        });
      } else {
        if (password === "") {
          this.setState({
            emptyPassword: true,
          });
        } else {
          if (confirmpass === "") {
            this.setState({
              emptyConfirmpass: true,
            });
          } else {
            if (!validateEmail(email)) {
              this.setState({
                invalidEmail: true,
              });
            } else {
              if (password !== confirmpass) {
                this.setState({
                  diffPassword: true,
                });
              } else {
                if (password.length < 5 || confirmpass.length < 5) {
                  this.setState({
                    shortPassword: true,
                  });
                } else {
                  this.sendReq();
                }
              }
            }
          }
        }
      }
    }
  };

  sendReq = async () => {
    const { displayName, email, password, confirmpass } = this.state;

    const bodyData = {
      displayName: displayName,
      email: email,
      password: password,
      confirmpass: confirmpass,
    };

    console.info(bodyData);

    this.setState({
      displayName: "",
      emptyDisplayName: false,
      email: "",
      emptyEmail: false,
      invalidEmail: false,
      password: "",
      emptyPassword: false,
      confirmpass: "",
      emptyConfirmpass: false,
      diffPassword: false,
      shortPassword: false,
    });
  };

  render() {
    const {
      displayName,
      emptyDisplayName,
      email,
      emptyEmail,
      invalidEmail,
      password,
      emptyPassword,
      confirmpass,
      emptyConfirmpass,
      diffPassword,
      shortPassword,
    } = this.state;
    return (
      <div className="signup__form">
        <div className="form__logo">
          <img src={logo} alt="Sign Up" />
        </div>
        <div className="main__form">
          <div className="form_fields">
            <p>Create new account</p>
            <div className="input__name mb-3">
              <input
                type="text"
                name="displayName"
                id="displayName"
                placeholder="Name"
                value={displayName}
                onChange={(e) => this.handleChange(e)}
                autoFocus
              />
              {emptyDisplayName ? (
                <div className="message">Please add name</div>
              ) : null}
            </div>
            <div className="input__name mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => this.handleChange(e)}
              />
              {emptyEmail ? (
                <div className="message">Please add email address</div>
              ) : invalidEmail ? (
                <div className="message">
                  Please enter a valid email address
                </div>
              ) : null}
            </div>
            <div className="input__name mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
              {emptyPassword ? (
                <div className="message">Please add password</div>
              ) : null}
            </div>
            <div className="input__name mb-4">
              <input
                type="password"
                name="confirmpass"
                id="confirmpass"
                placeholder="Confirm Password"
                value={confirmpass}
                onChange={(e) => this.handleChange(e)}
              />
              {emptyConfirmpass ? (
                <div className="message">Please add confirmation password</div>
              ) : diffPassword ? (
                <div className="message">Please match passwords</div>
              ) : shortPassword ? (
                <div className="message">
                  Length of password should be more then 5
                </div>
              ) : null}
            </div>
            <div className="submit__button" onClick={() => this.handleSave()}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    );
  }
}
