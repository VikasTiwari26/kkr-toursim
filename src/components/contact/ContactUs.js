import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  state = {
    name: "",
    phn_no: "",
    email: "",
    query: "",
    formErr: false,
    errMsg: "",
  };
  handleInputChange = (e) => {
    // console.log(e.target.value);
    //console.log(e.target.name);
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { phn_no, email } = this.state;
    this.setState({ formErr: false, errMsg: "" });
    if (phn_no.length != 10) {
      this.setState({
        formErr: true,
        errMsg: "Phone number must be of 10-Digits",
      });
    } else if (typeof email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email)) {
        this.setState({
          formErr: true,
          errMsg: "Please enter a valid email address.",
        });
      } else {
        console.log(this.state);
        this.setState({
          formErr: true,
          errMsg: "Thank You so much",
        });
      }
    }
  };
  validateBtn = () => {
    const { name, phn_no, email, query } = this.state;
    return (
      name.length > 0 &&
      phn_no.length > 0 &&
      email.length > 0 &&
      query.length > 0
    );
  };
  render() {
    const { name, phn_no, email, query } = this.state;
    return (
      <div className="main-contact-cntnr">
        <div className="heading">
          <p>Please get in touch and our expert support</p>
          <p>team will help you out.</p>
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
              <textarea
                className="contact-input"
                placeholder="Your query"
                value={query}
                name="query"
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className="btn-cntnr">
              <button className="button-contact" disabled={!this.validateBtn()}>
                Submit
              </button>
            </div>
            {this.state.formErr ? (
              <p style={{ color: "red" }}>{this.state.errMsg}</p>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
