import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer-container">
               <div className="inner-cntnr">
                    <div className="copywrite-text"> 
                        <p>Developed by Aryan Goyal &copy; All rights reserved.</p>
                    </div>
                    <div className="cstm-icons">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-google-plus-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    </div>
               </div>
            </div>
         );
    }
}
 
export default Footer;