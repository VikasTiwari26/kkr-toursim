import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { icon } from '../images/images';

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
                </Switch>
            <Footer/>
            </BrowserRouter>
         );
    }
}
 
export default Routes;