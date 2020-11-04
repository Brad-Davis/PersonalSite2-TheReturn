import React from "react"
import '../pages/index.css' 
import scrollTo from 'gatsby-plugin-smoothscroll';

class Navbar extends React.Component {
    render(){
       return <div>
       <div class="navbar">
           <a href="javascript:void(0);" onClick={() => scrollTo("#about")}>About</a>/
           <a href="javascript:void(0);" onClick={() => scrollTo("#work")}>Work</a>/
           {/* <a href="#projects">Projects</a>/ */}
           <a href="javascript:void(0);" onClick={() => scrollTo("#contact")}>Contact</a>/
           <a href="/blog">Blog</a>
       </div>
       </div> 
    }
    
}

export default Navbar;