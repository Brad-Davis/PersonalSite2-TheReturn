import React from "react"
import WorkElement from "./WorkElement.js"
import '../pages/index.css' 
import Navbar from "./Navbar.js";
import WorkTitle from './WorkTitle.js';
import Bruce from "../images/bruceSite.png";
import Octavate from "../images/octavateSite.jpeg";
import OctavatLogo from "../images/octavateLogo.png";
import Alex from "../images/alexSite.gif";
import OctavateDatabase from "../images/octavateDatabase.png";
import Alex2 from "../images/alexSiteTitle.gif";
import Prottas from "../images/prottaslogo.svg";
import Slicer from "../images/slicerSite.png"
import BrucePage1 from "../images/brucePage1.png";
import BrucePage2 from "../images/brucePage2.png";
import BruceSite1 from "../images/bruceSite2.jpg";
// import BruceSite2 from "../images/bruceSite2.jpg";
import AlexSiteDemo from "../images/alexSiteDemo.gif";
import BruceDemo from "../images/bruceSiteDemo.gif";
import ProttasSiteDemo from "../images/prottasSiteDemo.gif";

import './mainPageText.css';


class Work extends React.Component {
    render(){
       return <div id={this.props.id} className="splitSection">
           <div className="fullImage image1">
                <WorkTitle id="aboutTitle" className="logoCenter" />
                <Navbar />
            </div>
           <div className="text" style={{padding: '0px'}}>
                <div style={{borderTop: "10px solid #30bced"}} className="workContainer">
                <WorkElement color='white' image={Octavate} hiddenId="octavateInfo" image2={OctavatLogo} alt="Octavate Logo" imageId2="octavateLogo" jobTitle="Octavate">
                    <div className='workInformation'>
                        <h1>Octavate</h1>
                        <h3>Full Stack Developer</h3>
                        <h3>May 2019-Present</h3>
                        <br/>
                        <p><a className="link" href='https://octavate.io' target='_blank' rel="noreferrer">Click here to visit our new static website!</a></p>
                        <br/>
                        <p className='readable'>
                        Currently I am working with a music-tech startup called Octavate. On this small team which I have been a part of for over a year 
                        and a half, I have found myself developing multiple aspects of this company. I started as a database developer creating the schema to organize the large amounts 
                        of data we were going to be storing and analyzing.
                        </p>
                        <br/>
                        <div className='pageSeparator'>
                            <div className='row rowPadding'>
                                <div className='col-xl-6' >
                                    <div className='textVerticalContainer readable'>
                                        Image of an early iteration of the database schema which, as of November 10th 2020, has over 300,000 entries.
                                
                                    </div>
                                </div>
                                <div  className='col-xl-6'>
                                    <img className='dropShadow' style={{width: '100%'}} alt='early database schema for octavate website' src={OctavateDatabase}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <p className='readable'>
                        After finishing this initial task, I stayed with the team and started working as a backend developer to help the frontend visualizations
                        of the site communicate with the database. At the time, we were working with complex visualizations built with Three.js over a Node.js framework.
                        
                        We decided to simplify the visualizations using D3.js and a unique tree structure to organize and have continued to build out more complex pieces 
                        of the site modeled after financial investment web apps.
                        </p>
                        <br/>
                        <div className='pageSeparator'>
                            <div className='fullWidth'>
                                <h3 className='sepTitle'>Octavate</h3>
                                <h5 className='sepSubtitle'>Marketing Showcase Video</h5>
                                <div className='video-container'>
                                    <iframe className='dropShadow' src='https://www.youtube.com/embed/WqO98ubfXPU' frameborder='0'
                                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                    
                    </div>
                </WorkElement>
                <WorkElement color="black" image={Bruce} alt="Life is In the Transitions Bruce Feiler" hiddenId="bruceInfo" imageId="bruceImage" jobTitle="SlicerDMRI Internship">
                    <div className='workInformation'>
                        <h1>Bruce Feiler</h1>
                        <h3>Web Developer</h3>
                        <h3>June 2019-Present</h3>
                        <br/>
                        <h3><a className="link" href='https://www.brucefeiler.com/' target='_blank' rel="noreferrer">Click here to visit Bruce's website!</a></h3>
                        <br/>
                        <p className="readable">
                        For more than a year and a half now, I've been creating web content for New York Times Best Selling Author and Ted Talk Speaker Bruce Feiler.
                        I have developed various forms of content for his newest Book, such as an online interview with dynamic results and data visualizations based 
                        on the data of the novel. In his New York Times Best-Seller, Life Is in the Transitions: Mastering Change at Any Age, I created multiple visualizations 
                        that ended up in the pages of the book, based on data from over 200 interviews that I helped collect.
                        </p>
                        <br/>
                        <div className='pageSeparator'>
                            <h3 className='sepTitle'>Examples of my Work With Bruce</h3>
                            <h5 className='sepSubtitle'>Be sure to try out the online life story interview!</h5>
                            <div className='row rowPadding' style={{marginBottom: '60px'}}>
                                
                                <div className='col-xl-6'>
                                    <div className="readable textVerticalContainer">
                                        Two pages from Bruce Feiler's Life Is in the Transitions which feature 3 of my 25 visualizations featured in the book.
                                    </div>
                                
                                </div>
                                <div className='col-xl-6'>
                                    {/* <iframe frameborder="0" scrolling="no" style={{border: '0px', width: '100%', height: '500px'}} src='https://books.google.com/books?id=mCexDwAAQBAJ&newbks=0&lpg=PP1&pg=PA10&output=embed' ></iframe> */}
                                    <img className='halfWidth dropShadow' alt='page of Life is In The Transistions with my visualization page 1' src={BrucePage1} />
                                    <img className='halfWidth dropShadow' style={{marginLeft: '5px'}} alt='page of Life is In The Transistions with my visualization page 2' src={BrucePage2} />
                                </div>
                            </div>
                            <div className='row rowPadding' style={{marginBottom: '60px'}}>
                                <div className='col-xl-6'>
                                    <img className='dropShadow' style={{width: '100%'}} alt='page of Life is In The Transistions with my visualization page 1' src={BruceSite1} />
                                </div>
                                <div className='col-xl-6'>
                                    <div className='readable textVerticalContainer'>
                                        Working with Bruce has also included redisigning and building content for his website. 
                                    </div>
                                
                                </div>
                                
                            </div>
                            <h3 className='sepTitle'>Customized Output of Online Life Story Interview</h3>
                            <div className='centerFlex'>
                                <a className="link" style={{display: 'block'}} href='https://www.brucefeiler.com/life-story-online-interview-intro/'><h5 style={{cursor: "pointer"}} >Click here to try it out!</h5></a>
                            </div>
                            <img className='fullWidth dropShadow' alt="output of demo from bruce site" src={BruceDemo} /> 
                             
                        </div>
                    </div>
                </WorkElement>
                <WorkElement color="white" image={Alex} image2={Alex2} hiddenId="alexInfo" alt="Alex Vrahas Website Gif" imageId2="alexLogo" jobTitle="Alex Vrahas: Personal Site">
                    <div className='workInformation'>
                        <h1>Alex Vrahas: Personal Site</h1>
                        <h3>Web Developer</h3>
                        <h3>October 2020</h3>
                        <br/>
                        <h3><a className="link" href='https://alexvrahas.com/' target='_blank' rel="noreferrer">Click Here To Check Out The Site</a></h3>
                        <br/>
                        <p className="readable">
                        One of the stranger websites I’ve built, in fact definitely the strangest website I’ve built. Created to reference the hyperactive, gif-centric early days of the internet, this site is a film portfolio to display the work of a friend of mine. He came to me with the idea as well as a basic wireframe and I was tasked with building out and making the site as insane as possible. I think I did a pretty good job!
                        </p>
                        <br/>
                        <div className='pageSeparator'>
                            <h3 className='sepTitle'>My Favorite Part of This Project</h3>
                            <h5 className='sepSubtitle'>Hovering shaking effect and unique page transitions</h5>
                            <img className='fullWidth dropShadow' alt="gif of explosive page transitions on Alex's Website" src={AlexSiteDemo}/>
                        </div>
                        
                    </div>
                </WorkElement>
                <WorkElement color="white" image={Prottas} hiddenId="prottasInfo" alt="Prottas Painting Logo" imageId="prottasImage" jobTitle="SlicerDMRI Internship" >
                    <div className='workInformation'>
                        <h1>Prottas Painting Website</h1>
                        <h3>Web Developer</h3>
                        <h3>January 2019</h3>
                        <br/>
                        <h3><a className="link" href='https://prottaspainting.net/' target='_blank' rel="noreferrer" >Click Here To Check Out The Site</a></h3>
                        <br/>
                        <p className="readable">
                        This was my first paid website job, and it was a great experience to implement the skills I’d learn in college in a professional context. I was highered by Glenn Prottas who owns a local painting company in the hometown where I grew up. A pretty straightforward static site where design and ease of use became the focus for me.
                        </p>
                        <div className='pageSeparator'>
                            <h3 className='sepTitle'>My Favorite Feature</h3>
                            <h5 className='sepSubtitle'>On hover appears a map overlay</h5>
                            <img className='fullWidth dropShadow' alt='gif of prottas painting website of contact page with map overlay' src={ProttasSiteDemo} />
                        </div>
                    </div>
                </WorkElement>
                <WorkElement color="black" image={Slicer} alt="SlicerDMRI logo" hiddenId="slicerInfo" imageId="slicerImage" jobTitle="SlicerDMRI Internship" >
                    <div className='workInformation'>
                        <h1>SlicerDMRI</h1>
                        <h3>Open Source Developer</h3>
                        <h3>Summer 2017</h3>
                        <br/>
                        <h3 className="workLink"><a className="link" href='http://dmri.slicer.org/' target='_blank' rel="noreferrer" >Click Here To Check Out SlicerDMRI's site</a></h3>
                        <br/>
                        <p className="readable">
                        This was my first tech internship in which I took part in the development of an extension to the open source software 3D Slicer called SlicerDMRI. Working with Harvard Medical School and Brigham & Women's Hospital, I took part in the outreach and accessibility of SlicerDMRI focusing mainly on rewriting and reformatting the tutorials to become more accessible to people with limited programming experience. I also made a video outlining the tutorials and uses of SlicerDMRI.
                        </p>
                        <br/>
                        <div className='pageSeparator'>
                            <div className='fullWidth'>
                                <h3 className='sepTitle'>Video Introduction To SlicerDMRI</h3>
                                <h5 className='sepSubtitle'>Produced, edited, and wrote this video for SlicerDMRI</h5>
                                <div className='videoContainer'>
                                    <iframe className='dropShadow' src='https://www.youtube.com/embed/Ml4oS5n2I64' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </WorkElement>
                    {/* <div className="halfScreen marginBottomLarge">
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