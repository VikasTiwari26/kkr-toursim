import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  state = {
    name: "",
    phn_no: "",
    email: "",
    suggestions: "",
    formErr: false,
    errMsg: "",
  };
  handleInputChange = (e) => {
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
    const { name, phn_no, email, suggestions } = this.state;
    return (
      name.length > 0 &&
      phn_no.length > 0 &&
      email.length > 0 &&
      suggestions.length > 0
    );
  };
  render() {
    const { name, phn_no, email, suggestions } = this.state;
    return (
      <div className="feedback-cntnr">
        <div className="heading1">
          <h1 className="feedback-title">Tell Us A Word !</h1>
        </div>
        <div className="div1-feedback">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="cstm-input"
                name="name"
                value={name}
                type="text"
                placeholder="Firstname"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                className="cstm-input"
                name="phn_no"
                value={phn_no}
                maxLength="10"
                placeholder="Contact no."
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                className="cstm-input"
                name="email"
                value={email}
                placeholder="Email Id"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="ratingDiv">
              <div className="cstm-input" style={{ border: "none" }}>
                Rate Us
              </div>
              <div className="rating">
                <input type="radio" name="rating" name="star1" />
                <label htmlFor="star1"></label>
                <input type="radio" name="rating" name="star2" />
                <label htmlFor="star2"></label>
                <input type="radio" name="rating" name="star3" />
                <label htmlFor="star3"></label>
                <input type="radio" name="rating" name="star4" />
                <label htmlFor="star4"></label>
                <input type="radio" name="rating" name="star5" />
                <label htmlFor="star5"></label>
              </div>
            </div>
            <div>
              <label
                style={{ marginTop: "0px", border: "none" }}
                htmlFor="suggestion"
                className="cstm-input"
              >
                Suggestion
              </label>
              <textarea
                className="cstm-input"
                name="suggestions"
                value={suggestions}
                rows="4"
                cols="50"
                style={{ border: "solid 2px black" }}
                onChange={this.handleInputChange}
              ></textarea>
            </div>

            <div className="button">
              <button
                disabled={!this.validateBtn()}
                className="button-contact"
                style={{ textAlign: "center" }}
              >
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

export default Feedback;
