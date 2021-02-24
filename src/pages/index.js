import React from 'react';
import './index.css';
import Homescreen from '../components/HomeScreen.js';
import About from '../components/About.js';
import Work from '../components/Work.js';
import Contact from '../components/Contact.js';
import { Helmet } from "react-helmet";
// import SlideShow from '../components/SlideShow.js';
// import Footer from '../components/Footer.js'

//TO EXPORT TO GITHUB PAGES USE COMMAND NPM RUN DEPLOY THEN ON GITHUB PAGES FIX CNAME FIX WOULD BE GREAT FOR THAT

import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return <div>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hi, I'm Brad!</title>
        <link rel="canonical" href="https://bradcampdavis.com/" />
      </Helmet>
      <Homescreen />
      <Work id="work" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  </div>
}
