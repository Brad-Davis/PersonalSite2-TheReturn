import React from "react";
import '../pages/index.css' ;
import './mainPageText.css';
import Navbar from "./Navbar.js";
// import fontawesome from '@fortawesome/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkedIn from "./LinkedIn.js";
import Instagram from "./instagram.js";
import Github from "./Github.js";
import ContactTitle from "./ContactTitle.js"



class Contact extends React.Component {
    
    render(){
       return <div id={this.props.id} class="splitSection">
           <div class="fullImage image2">
                <ContactTitle className="logoCenterBig" />
                <Navbar />
            </div>
           <div class="text">
               <h1>
                   Reach out and say hi!
               </h1>
                <p>
                    I am available for freelance projects and full-time employment.
                    <br />
                    <br />
                    Email me: <a href="mailto:brad.davis@nyu.edu">brad.davis@nyu.edu</a>
                    <br />
                    <br />
                </p>

                <a className="socials" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brad-camp-davis/"><LinkedIn className="socials" /></a>
                <a className="socials" target="_blank" rel="noreferrer" href="https://www.instagram.com/braddavistheworst/"><Instagram className="socials" /></a>
                <a className="socials"  target="_blank" rel="noreferrer" href="https://github.com/Brad-Davis"><Github className="socials" /></a>
                {/* <FontAwesomeIcon icon={['fab', 'twitter']} />

                <FontAwesomeIcon icon={['fab', 'facebook']} />

                <FontAwesomeIcon icon={['fab', 'linkedin']} />

                <FontAwesomeIcon icon={['fab', 'github']} /> */}
            </div>
            
       </div>
    }
    
}

export default Contact;