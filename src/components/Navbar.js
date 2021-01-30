import React from "react"
import '../pages/index.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby";

class Navbar extends React.Component {
    render() {
        return <div>
            <ul className="navbar">
                <li><a href="javascript:void(0);" onClick={() => scrollTo("#about")}>About</a></li>/
           <li><a href="javascript:void(0);" onClick={() => scrollTo("#work")}>Work</a></li>/
           {/* <a href="#projects">Projects</a>/ */}
                <li><a href="javascript:void(0);" onClick={() => scrollTo("#contact")}>Contact</a></li>/
                <li><Link to="/blog">Blog</Link></li>
                {/* <li><a href="/blog">Blog</a></li> */}
            </ul>
        </div>
    }

}

export default Navbar;