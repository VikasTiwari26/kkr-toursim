import React, { Component } from "react";
import "./Header.css";
import { icon } from "../../images/images";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};

  getActiveClass = (e) => {
    let index = e.target.value;
    let allTabs = document.getElementsByClassName("nav-tab");
    for (let i = 0; i < allTabs.length; i++) {
      if (i == index) {
        allTabs[i].classList.add("active");
      } else {
        allTabs[i].classList.remove("active");
      }
    }
  };

  render() {
    return (
      <div className="background-div">
        <div className="main-container">
          <div className="logo">
            <img src={icon} />
          </div>
          <div className="nav-items">
            <ul>
              <Link to="/home">
                <li onClick={this.getActiveClass} value="0" className="nav-tab">
                  Home
                </li>
              </Link>
              <Link to="geeta-jayanti">
                <li onClick={this.getActiveClass} value="1" className="nav-tab">
                  Geeta Jayanti Mahotsav
                </li>
              </Link>
              <Link to="/covid">
                <li onClick={this.getActiveClass} value="2" className="nav-tab">
                  Tourism After COVID-19
                </li>
              </Link>
              <Link to="/tourist-spot">
                <li onClick={this.getActiveClass} value="3" className="nav-tab">
                  Tourist Spots
                </li>
              </Link>
              <Link to="/feedback">
                <li onClick={this.getActiveClass} value="4" className="nav-tab">
                  Feedback
                </li>
              </Link>
              <Link to="/contact">
                <li onClick={this.getActiveClass} value="5" className="nav-tab">
                  Contact us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
