import React from "react"
import '../pages/index.css'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby";

class NavbarBlog extends React.Component {
    render() {
        return <div className="navbarContainer">
            <ul className="navbarBlog navbar">
                <li><Link to="/">Home</Link></li>/
                <li><a href="javascript:void(0);" onClick={() => scrollTo("#about")}>About</a></li>/
                <li><a href="javascript:void(0);" onClick={() => scrollTo("#work")}>Work</a></li>/
                <li><a href="javascript:void(0);" onClick={() => scrollTo("#contact")}>Contact</a></li>
            </ul>
        </div>
    }

}

export default NavbarBlog;