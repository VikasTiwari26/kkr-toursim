import React, { Component } from 'react';
import "./ContactUs.css"


class ContactUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-contact-cntnr">
                <div className="heading">
                    <p>Please get in touch and our expert support</p>
                    <p>team will help you out.</p>
                </div>
             
              <div className="contact-cntnr">
                    <form>
                        <div className="form-group">
                            <input placeholder="Full name" type="text"/>
                        </div>
                        <div className="form-group">
                            <input placeholder="Phone Number" type="number"/>
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" type="text"/>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your query"></textarea>
                        </div>
                       <div className="btn-cntnr">
                            <button>Submit</button>
                       </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default ContactUs;