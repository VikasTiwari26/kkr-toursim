import React, { Component } from "react";
import { Link } from "react-router-dom";
import { registeredUsers } from "../../utils/users";
import "./Login.css";

class Login extends Component {
  state = {
    phn_no: "",
    pass: "",
    loginErr: false,
    errMsg: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loginErr: false, errMsg: "" });
    const { phn_no, pass } = this.state;
    let user = registeredUsers.find(
      (regUser) => regUser.phn_no == phn_no && regUser.pass == pass
    );
    if (user) {
      console.log("user found");
      localStorage.setItem("isUserLoggedIn", true);
      this.props.history.push("/home");
    } else {
      console.log("user not found");
      this.setState({
        loginErr: true,
        errMsg: "Wrong phone number or Password",
      });
    }
  };
  validateBtn = () => {
    const { phn_no, pass } = this.state;
    return phn_no.length > 0 && pass.length > 0;
  };
  handleInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      // loginErr: true,
      // errMsg: "Please fill correct details",
    });
    // console.log(this.validateBtn())
  };
  render() {
    let { phn_no, pass } = this.state;
    return (
      <div>
        <div className="main-contact-cntnr">
          <div className="heading">
            <p>Welcome to Kurukshetra</p>
            <p>Login</p>
          </div>
          <div className="contact-cntnr">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="contact-input login-input"
                  placeholder="Phone Number"
                  type="number"
                  value={phn_no}
                  name="phn_no"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="contact-input login-input"
                  type="password"
                  placeholder="Password"
                  value={pass}
                  name="pass"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="btn-cntnr">
                <button
                  className="button-contact"
                  disabled={!this.validateBtn()}
                >
                  Login
                </button>
              </div>
              <div className="register-here">
                <p>forgot password ?</p>
                <p>
                  New User?<Link to="/register"> Register here.</Link>
                </p>
              </div>
              {this.state.loginErr ? (
                <p style={{ color: "red" }}>{this.state.errMsg}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
