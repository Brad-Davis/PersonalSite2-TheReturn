import React from "react"
import '../pages/index.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";


function NavbarBlog() {



    return (<div className="navbarContainer">
        <ul className="navbarBlog navbar">
            <li><Link to="/">Home</Link></li>/
            <li><AnchorLink to="/#work" title="Work">Work</AnchorLink></li>/
            <li><AnchorLink to="/#about" title="about">About</AnchorLink></li>/
            <li><AnchorLink to="/#contact" title="contact">contact</AnchorLink></li>
        </ul>
    </div>);


}

export default NavbarBlog;