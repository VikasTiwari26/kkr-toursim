import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  state = {};
  render() {
    return (
      <div className="feedback-cntnr">
        <div className="heading1">
          <h1 className="feedback-title">Tell Us A Word !</h1>
        </div>
        <div className="div1-feedback">
          <form>
            <div>
              <input
                className="cstm-input"
                id="firstNames"
                type="text"
                maxLength="10"
                placeholder="Firstname"
              />
            </div>
            <div>
              <input
                className="cstm-input"
                id="contact"
                maxLength="10"
                placeholder="Contact no."
              />
            </div>
            <div>
              <input
                className="cstm-input"
                id="Email"
                type="email"
                placeholder="Email Id"
              />
            </div>
            <div className="cstm-input" style={{ border: "none" }}>
              Rate Us
            </div>
            <div className="rating">
              <input type="radio" name="rating" id="star1" />
              <label htmlFor="star1"></label>
              <input type="radio" name="rating" id="star2" />
              <label htmlFor="star2"></label>
              <input type="radio" name="rating" id="star3" />
              <label htmlFor="star3"></label>
              <input type="radio" name="rating" id="star4" />
              <label htmlFor="star4"></label>
              <input type="radio" name="rating" id="star5" />
              <label htmlFor="star5"></label>
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
                id="suggestion"
                rows="4"
                cols="50"
                style={{ border: "solid 2px black" }}
              ></textarea>
            </div>
          </form>
          <div className="button">
            <button
              type="submit"
              className="button-contact"
              style={{ textAlign: "center" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
