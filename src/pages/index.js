import React from 'react';
import './index.css';
import Homescreen from './HomeScreen.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js'
import SlideShow from './SlideShow.js';
import Footer from './Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return <div>
    <Homescreen />
    <About />
    <Work />
    <Contact />
    <SlideShow />
    <Footer />
  </div>
}
