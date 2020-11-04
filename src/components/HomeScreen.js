import React from "react"
import '../pages/index.css' 
import Typical from 'react-typical'
import Navbar from "./Navbar.js"

function NewlineText(props) {
    const text = props.text;
    return <div>{text}</div>;
}

class Homescreen extends React.Component {
    render(){
        return <div className="fullBackground">
        <h1 className="introText">      
          <NewlineText text={"Hi!\nI\'m Brad.\n"} />
          I am a{" "}
          <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'web developer',
            1000,
            "designer",
            1000,
            "musician",
            1000,
            "film nerd",
            1000,
            "New Yorker",
            1000,
            "Bostonian at heart",
            1000,
          ]}>
    
          </Typical>
        </h1>
        <Navbar />
      </div>
    }
    
}

export default Homescreen;