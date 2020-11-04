import React from "react"
import WorkElement from "./WorkElement.js"
import '../pages/index.css' 
import Navbar from "./Navbar";
import AlexGif from '../images/alexSite.gif'
import Bruce from "../images/bruceSite.png";
import Octavate from "../images/octavateSite.jpeg";
import OctavatLogo from "../images/octavateLogo.png";
import Alex from "../images/alexSite.gif";
import Alex2 from "../images/alexSiteTitle.gif";
import Prottas from "../images/prottaslogo.svg";
import Slicer from "../images/slicerSite.png"
import './mainPageText.css';


class Work extends React.Component {
    render(){

       return <div id={this.props.id} class="splitSection">
           <div class="fullImage image1">
                <Navbar />
            </div>
           <div class="text" style={{padding: '0px'}}>
                <div class="workContainer">
                <WorkElement image={Octavate} hiddenId="octavateInfo" image2={OctavatLogo} alt="Octavate Logo" imageId2="octavateLogo" jobTitle="Octavate" 
                content="<div class='workInformation'>
                    <h1>Octavate</h1>
                    <h3>March 2019-Present</h3>
                    <h3><a href='https://octavate.io' target='_blank' class='linkInformation'>Click here to visit our new static website!</a></h3>
                    <br>
                    <p>
                    Currently I am working with a music-tech startup called Octavate. On this small team which I have been a part of for over a year 
                    and a half, I have found myself developing multiple aspects of this company. To learn more about the project it is best explained 
                    by the about section on our new static website. I started as a database developer creating the schema to organize the large amounts 
                    of data we were going to be storing and analyzing.
                    </p>
                    <br>
                    <p>
                    MySQL database schema
                    </p>
                    <br>
                    Image of database schema
                    <br>
                    <p>
                    After finishing this initial task, I stayed with the team and started working as a backend developer to help the frontend visualizations
                    of the site communicate with the database. At the time, we were working with complex visualizations built with Three.js over a Node.js framework.
                    </p>

                    Image of earths codepen thingy
                    <p>
                    We decided to simplify the visualizations using D3.js and a unique tree structure to organize and have continued to build out more complex pieces 
                    of the site modeled after financial investment web apps.
                    </p>
                    Video
                    
                    Early Visualizations 3
                    
                    </p>
                
                </div>"  />
                <WorkElement image={Bruce} alt="Life is In the Transitions Bruce Feiler" hiddenId="bruceInfo" imageId="bruceImage" jobTitle="SlicerDMRI Internship" content="<div class='workInformation'>
                    <h1>Bruce Feiler</h1>
                    <h3>June 2019-Present</h3>
                    <h3><a href='https://www.brucefeiler.com/' target='_blank' class='linkInformation'>Click here to visit Bruce's website!</a></h3>
                    <br>
                    <p>
                    For more than a year and a half now, I've been creating web content for New York Times Best Selling Author and Ted Talk Speaker Bruce Feiler.
                    I have developed various forms of content for his newest Book, such as an online interview with dynamic results and data visualizations based 
                    on the data of the novel. In his New York Times Best-Seller, Life Is in the Transitions: Mastering Change at Any Age, I created multiple visualizations 
                    that ended up in the pages of the book, based on data from over 200 interviews that I helped collect.
                    </p>
                    <p>
                    Images from the book

                    Images from site

                    Images from online interview
                    </p>

                <div>"  />
                <WorkElement image={Alex} image2={Alex2} hiddenId="alexInfo" alt="Alex Vrahas Website Gif" imageId2="alexLogo" jobTitle="SlicerDMRI Internship" 
                content="<div class='workInformation'>
                    <h1>Alex Vrahas: Personal Site</h1>
                    <h3>October 2020</h3>
                    <h3><a href='https://alexvrahas.com/' target='_blank' class='linkInformation'>Click Here To Check Out The Site</a></h3>
                    <br>
                    <p>
                    One of the stranger websites I’ve built, in fact definitely the strangest website I’ve built. Created to reference the hyperactive, gif-centric early days of the internet, this site is a film portfolio to display the work of a friend of mine. He came to me with the idea as well as a basic wireframe and I was tasked with building out and making the site as insane as possible. I think I did a pretty good job!
                    </p>
                    <br>
                    <div class='pageSeparator'>
                        <img class='fullWidth' alt='gif of explosive page transitions on Alex's Website' src='/img/alexSiteDemo.gif'>
                        <p class='subTitle'>
                        My personal favorite touch: the hovering shaking effect and page transitions
                        </p>
                    </div>
                    
                </div>"  />
                <WorkElement image={Prottas} hiddenId="prottasInfo" alt="Prottas Painting Logo" imageId="prottasImage" jobTitle="SlicerDMRI Internship" 
                content="<div class='workInformation'>
                    <h1>Prottas Painting Website</h1>
                    <h3>October 2020</h3>
                    <h3><a href='https://alexvrahas.com/' target='_blank' class='linkInformation'>Click Here To Check Out The Site</a></h3>
                    <br>
                    <p>
                    This was my first paid website job, and it was a great experience to implement the skills I’d learn in college in a professional context. I was highered by Glenn Prottas who owns a local painting company in the hometown where I grew up. A pretty straightforward static site where design and ease of use became the focus for me.
                    </p>
                    <p>
                    My Favorite detail is the map that appears on hover of the location of Glenn Prottas Business
                    </p>
                </div>"  />
                <div class="hiddenInfo" id="prottasHidden">
                    
                </div>
                <WorkElement image={Slicer} alt="SlicerDMRI logo" hiddenId="slicerInfo" imageId="slicerImage" jobTitle="SlicerDMRI Internship" />
                <div class="hiddenInfo" id="slicerHidden">
                    
                </div>
                    {/* <div class="halfScreen marginBottomLarge">
                        <div class="col-md-4">
                            <div class="centerDiv">
                                <div class="jobTitle">
                                    Job Title
                                </div>
                                <a class="moreInfo">
                                    Click here for more info
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="clickToGo">
                                <img src={Octavate} alt="Bruce Feiler Website Homepage Image" />
                            </div>
                        </div>
                    </div>
                    <div id="octavate" class="hiddenInfo">

                    </div>
                    
                    
                    <div class="halfScreen marginBottomLarge">
                        <div class="col-md-4">
                            <div class="centerDiv">
                                <div class="jobTitle">
                                    Job Title
                                </div>
                                <a class="moreInfo">
                                    Click here for more info
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="clickToGo">
                                <img src={Alex} alt="Bruce Feiler Website Homepage Image" />
                            </div>
                        </div>
                    </div>
                    <div id="alexVrahas" class="hiddenInfo">

                    </div>
                    <div class="halfScreen marginBottomLarge">
                        <div class="col-md-8">
                            <div class="clickToGo">
                                <img src={Prottas} alt="Bruce Feiler Website Homepage Image" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="centerDiv">
                                <div class="jobTitle">
                                    Job Title
                                </div>
                                <a class="moreInfo">
                                    Click here for more info
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div id="alexVrahas" class="hiddenInfo">

                    </div> */}
                    
                </div>
            </div>
       </div>
    }
    
}

export default Work;