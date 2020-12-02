import React, { Component } from "react";
import { registeredUsers } from "../../utils/users";

class Register extends Component {
  state = {
    name: "",
    phn_no: "",
    email: "",
    pass: "",
    conf_pass: "",
    registerErr: false,
    errMSG: "",
  };

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  validateBtn = () => {
    const { name, phn_no, email, pass, conf_pass } = this.state;
    return (
      name.length > 0 &&
      phn_no.length > 0 &&
      email.length > 0 &&
      pass.length > 0 &&
      conf_pass.length > 0 &&
      pass === conf_pass
    );
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.validateBtn());
  };
  handleSubmit = (e) => {
    const { name, phn_no, email, pass, conf_pass } = this.state;
    e.preventDefault();
    let user = this.state;
    let existingUser = registeredUsers.find(
      (registered) => registered.phn_no == user.phn_no
    );

    // console.log(this.state);
    if (existingUser) {
      this.setState({
        registerErr: true,
        errMsg: "User already exists with this phone number",
      });
    } else {
      if (phn_no.length != 10) {
        this.setState({
          registerErr: true,
          errMsg: "Phone number must be of 10-Digits",
        });
      } else if (typeof email !== "undefined") {
        let pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(email)) {
          this.setState({
            registerErr: true,
            errMsg: "Please enter a valid email address.",
          });
        }
      } else {
        registeredUsers.push(user);
        console.log(registeredUsers);
        this.props.history.push("/login");
      }
    }
  };

  render() {
    const { name, phn_no, email, pass, conf_pass } = this.state;
    return (
      <div>
        <div className="main-contact-cntnr">
          <div className="heading">
            <p>New To our website</p>
            <p>Please register to continue.</p>
          </div>

          <div className="contact-cntnr">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="contact-input"
                  placeholder="Full name"
                  type="text"
                  value={name}
                  name="name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="contact-input"
                  placeholder="Phone Number"
                  type="number"
                  value={phn_no}
                  name="phn_no"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="contact-input"
                  placeholder="Email"
                  type="text"
                  value={email}
                  name="email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="contact-input"
                  type="password"
                  placeholder="Password"
                  value={pass}
                  name="pass"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="contact-input"
                  type="password"
                  placeholder="Confirm password"
                  value={conf_pass}
                  name="conf_pass"
                  onChange={this.handleInputChange}
                />
              </div>
              {this.state.registerErr ? (
                <p style={{ color: "red" }}>{this.state.errMsg}</p>
              ) : null}
              <div className="btn-cntnr">
                <button
                  className="button-contact"
                  disabled={!this.validateBtn()}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
