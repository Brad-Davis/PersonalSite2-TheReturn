import React from "react"
import '../pages/index.css'
import Typical from 'react-typical'
import Navbar from "./Navbar.js"
import Brad from "../images/bradBackgroundCrop2.jpg"
import scrollTo from 'gatsby-plugin-smoothscroll';

function NewlineText(props) {
  const text = props.text;
  return <div>{text}</div>;
}

class Homescreen extends React.Component {
  render() {
    return <div className="fullBackground" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(" + Brad + ")" }}>

      <h1 className="introText">
        <NewlineText text={"Hi!\nI\'m Brad.\n"} />
          I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="c"
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
        <br />
        <button href="javascript:void(0);" onClick={() => scrollTo("#work")} className="btn callToAction">
          See My Work <i class="arrow right"></i>
        </button>
      </h1>


      <Navbar />
    </div>
  }

}

export default Homescreen;