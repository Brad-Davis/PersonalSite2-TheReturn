import React from "react"
import './index.css' 


class Navbar extends React.Component {
    render(){
       return <div>
       <div class="navbar">
           <a href="#about">About</a>/
           <a href="#work">Work</a>/
           <a href="#projects">Projects</a>/
           <a href="#contact">Contact</a>/
           <a href="/blog">Blog</a>
       </div>
       </div> 
    }
    
}

export default Navbar;