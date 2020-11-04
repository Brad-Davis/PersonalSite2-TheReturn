import React from "react";
import '../pages/index.css' ;
import './mainPageText.css';
import Navbar from "./Navbar.js";
// import fontawesome from '@fortawesome/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkedIn from "./LinkedIn.js";



class Contact extends React.Component {
    
    render(){
       return <div id={this.props.id} class="splitSection">
           <div class="fullImage image2">
                <Navbar />
            </div>
           <div class="text">
               <h1>
                   Reach out and check out my socials here!
               </h1>
                <p>
                    I am available for freelance projects and full-time employment.
                </p>
                <LinkedIn className="socials" />
                {/* <FontAwesomeIcon icon={['fab', 'twitter']} />

                <FontAwesomeIcon icon={['fab', 'facebook']} />

                <FontAwesomeIcon icon={['fab', 'linkedin']} />

                <FontAwesomeIcon icon={['fab', 'github']} /> */}
            </div>
            
       </div>
    }
    
}

export default Contact;