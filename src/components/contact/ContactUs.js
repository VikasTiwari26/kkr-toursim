import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  state = {
    name: "",
    phn_no: "",
    email: "",
    query: "",
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
              <button className="button-contact">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
