import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "../components/contact/ContactUs";
import Covid from "../components/covid/Covid";
import Feedback from "../components/feedback/Feedback";
import Footer from "../components/footer/Footer";
import GeetaJayanti from "../components/GeetaJayanti/GeetaJayanti";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import TouristSpot from "../components/TouristSpot/TouristSpot";

class Routes extends Component {
  state = {};
  componentDidMount = () => {
    let loginFlag = localStorage.getItem("isUserLoggedIn");
    console.log(loginFlag);
    this.setState({ loginFlag });
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/covid" component={Covid} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/tourist-spot" component={TouristSpot} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/geeta-jayanti" component={GeetaJayanti} />
          <Redirect from="/" to="/login" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
