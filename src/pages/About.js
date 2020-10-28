import React from "react";
import './index.css' ;
import './mainPageText.css';
import Navbar from "./Navbar.js";


class About extends React.Component {
    render(){
       return <div class="splitSection">
           <div class="fullImage image2">
                <Navbar />
            </div>
           <div class="text">
               
            <h2>Like I said above: Hi, I’m Brad.</h2>
            <p>
            I am a web developer living in Brooklyn who graduated from NYU last year as a computer science major. 
            </p>
           
            <p>
            My love for building websites brought me into the world of design, and throughout my time as a student, I became interested in the artistic world of programming which has since grown into creative side projects and a deep interest in music technology.
            </p>
            <p>
            I’ve always considered myself to be pretty systematic when it comes to starting a new project. Recently, with much of my work being websites and designing interfaces, I have a system that I tend to stick to:
            </p>
            <div class="row">
            <div class="col-md-6">
            <h2>Left Brain</h2>

            <h5 class="marginBottom">Websites, UIs, Backend Technologies, Databases</h5>
           

            <h3>Researching</h3>
            <ul class='bulletList'>
                <li>
                Dedicating time looking for inspiration or researching and reading while taking notes and setting bookmarks.
                </li>
            </ul>
            
            <h3>Planning</h3>
            <ul class='bulletList'>
                <li>
                Getting my ideas down with Pencil and paper allowing for an easy flow of ideas without getting bogged down.
                </li>
            </ul>
            <h3>Scheduling</h3>
            <ul class='bulletList'>
                <li>
                Plotting out the steps of a project creating time slots with concrete tasks.
                </li>
            </ul>
            <h3>Building</h3>
            <ul class='bulletList'>
                <li>
                Following my schedule and building out a website. With every new project I include a new technology. For example, with this site this is my first time using Gatsby!
                </li>
            </ul>
            <h3>Testing</h3>
            <ul class='bulletList'>
                <li>
                    Reaching reach out to friends, family and co-workers to see where improvements can be made.
                </li>
            </ul>
            </div>

            <div class="col-md-6">
                <h2>Right Brain</h2>
                <h5 class="marginBottom">Music, Web Experiences, Videos, Visual Programming</h5>


                <h3>Visualizing</h3>
                <ul class='bulletList'>
                    <li>
                    Planning what you’re getting into and knowing you’re gonna be at least a little wrong.
                    </li>
                </ul>
                <h3>Experimenting</h3>
                <ul class='bulletList'>
                    <li>
                    Trying and quite possibly failing. A lot of my creative pursuits feel just as iterative as a website.
                    </li>
                </ul>
                <h3>Scheduling</h3>
                <ul class='bulletList'>
                    <li>
                    Placing (looser) constraints that allows me to move forward when something is good enough, and at points, when it's time to move on.
                    </li>
                </ul>
            </div>
            Goal: To keep the web an intuitive, inclusive and fun environment where the wonder and mystery from the early days of the internet is still alive.
            </div>
            </div>
            {/* Use image of right and left brain that's highlighted to use as a button to see what's on the left and right side */}
            
       </div>
    }
    
}

export default About;