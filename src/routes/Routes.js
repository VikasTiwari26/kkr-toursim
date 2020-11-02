import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ContactUs from '../components/contact/ContactUs';
import Covid from '../components/covid/Covid';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import TouristSpot from '../components/TouristSpot/TouristSpot';

class Routes extends Component {
    state = {  }
    componentDidMount = () =>{
       let loginFlag =  localStorage.getItem("isUserLoggedIn")
       console.log(loginFlag)
    }
    render() { 
        return ( 
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home} />
                    <Route path="/covid" component={Covid} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/tourist-spot" component={TouristSpot} />
                    <Redirect from="/" to="/home" />
                </Switch>
            <Footer/>
            </BrowserRouter>
         );
    }
}
 
export default Routes;