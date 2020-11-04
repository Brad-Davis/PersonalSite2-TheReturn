import React from "react"
import './slideshow.css' 
import {Carousel } from 'react-bootstrap';
import slide01 from '../images/slideshowBackground.png';
import slide02 from '../images/slideshowBackground2.png';
import u3Album1 from '../images/U3_1.jpg';
import u3Album2 from '../images/U3_2.png';
import noiseStatic from "../images/noiseBetweenStatic.png";
import 'bootstrap/dist/css/bootstrap.min.css';



class SlideShow extends React.Component {
    render(){
        return<Carousel>
        <Carousel.Item>
          <img src={slide01} alt="this is the first slide" />
          <Carousel.Caption>
          <div class="row">
              <div class="col-md-12">
                <img src={noiseStatic} alt="Noise Bewteen static album cover" />
              </div>
              
            </div>
            <h3>
              Noise Between Static
            </h3>
            <p>
              Noise Between Static is an instrumental concept album 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide02} alt="this is the second slide" />
          <Carousel.Caption>
            <div class="row">
              <div class="col-md-6">
                <img src={u3Album1} alt="On the hollywood Boulevard" />
              </div>
              <div class="col-md-6">
                <img src={u3Album2} alt="Vegas Baby album cover" />
              </div>
            </div>
            <h3>
              U3 Albums
            </h3>
            <p>
              Over quarantine me and two of my friends from highschool also known as U3 went to work on remotely continuing our band which we started back in 2015.
              Created as a outlet to quickly create music with friends has now evolved into a full band with an instagram presence and music videos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide01} alt="this is the second slide" />
          <Carousel.Caption>
            <h3>
              P5.js Web Project
            </h3>
            <p>
              This is the caption
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide02} alt="this is the second slide" />
          <Carousel.Caption>
            <h3>
              Video Playlist
            </h3>
            <p>
              This is the caption
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    }
    
}

export default SlideShow;