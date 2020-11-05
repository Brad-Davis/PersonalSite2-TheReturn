import React from 'react';
import './index.css';
import Homescreen from '../components/HomeScreen.js';
import About from '../components/About.js';
import Work from '../components/Work.js';
import Contact from '../components/Contact.js'
// import SlideShow from '../components/SlideShow.js';
// import Footer from '../components/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return <div>
    <Homescreen />
    <About id="about"/>
    <Work id="work"/>
    <Contact id="contact"/>
  </div>
}
