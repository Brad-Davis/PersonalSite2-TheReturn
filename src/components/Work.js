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
import ChubbLogo from "../images/Chubb.png";
import GoogleLogo from "../images/google.webp";
import TempoTurtle from "../images/TempoTurtle.svg";
import DocsComments from "../images/docsComments.png";
import TabLeaders from "../images/tabLeaders.png";


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
                <WorkElement color='black' image={GoogleLogo} hiddenId="googleInfo" alt="Chubb Logo" imageId="googleLogo" jobTitle="Octavate">
                    <div className='workInformation'>
                        <h1>Google Docs</h1>
                        <h3>Software Engineer</h3>
                        <h3>May 2022 - Febuary 2024</h3>
                        <p className='readable'>
                        During my time working as a Software Engineer at Google Docs, I was fortunate enough to contribute to this application that has over 1 billion active users. My main contributions related to a massive update to comments across Docs, Sheets and Slides, as well as taking part in the final steps of the fidelity project, relating to the conversion of Microsoft Word documents to docs.
                        </p>
                        <div className='pageSeparator'>
                            <div className='row rowPadding'>
                                <div className='col-xl-6' >
                                    <div className='textVerticalContainer readable'>
                                    To highlight some of my work (which you can open up a doc and see for yourself), I’ll start with the comments sidebar across docs, sheets and slides. Alongside its main features, we implemented comment filters and the “For you” tab.
                                    <br/>
                                    <br/>
                                    </div>
                                </div>
                                <div  className='col-xl-6'>
                                    <img className='dropShadow' style={{width: '100%'}} alt='early database schema for octavate website' src={DocsComments}/>
                                </div>
                                
                                <p className='readable col-xl-12'>
                                    We also worked on minimized comments which is now a feature across all editors which is a great way to simplify documents that have been heavily marked up.
                                </p>
                            </div>
                            
                        </div>
                        <p className='readable'>
                        <br/>
                        A change in which I build from end to end was tab leaders (the dots, dashes and or underline that connects the title to the page number as show below). This change was during the addition of the Table of Contents feature and was the first project I was a part of at Google. The implementation of Tab leaders required an in depth peak under the hood of the model of Docs and was a great way to kick off my time at Google.
                        <br/>
                        </p>
                         <img className='fullWidth dropShadow' alt="output of demo from bruce site" src={TabLeaders} /> 
                         <br/>

                    </div>
                </WorkElement>
                <WorkElement color='white' image={ChubbLogo} hiddenId="chubbInfo" alt="Chubb Logo" imageId="chubbLogo" jobTitle="Octavate">
                    <div className='workInformation'>
                        <h1>Chubb</h1>
                        <h3>Full Stack Developer</h3>
                        <h3>April 2021 - April 2022</h3>
                        <p className='readable'>
                        Chubb was a great introduction to the corporate world of programming where I met great friends and mentors to guide me along the way. I immediately dove deep into backend Node.js project surrounding data communication and manipulation, connecting users to updated payment and pricing systems for insurance claims and statements. This project was far outside my comfort zone as I not used to working on codebases of that size and the data processing required, was the first time I truly felt like a professional full-stack developer. 
                        </p>
                        <div className='pageSeparator'>
                            <div className='row rowPadding'>
                                <h2 style={{margin: 'auto', marginBottom: "20px"}}>Tech Associates Program</h2>
                                <br/>
                                <p className='readable'>
                                    I was brought onto the team while also taking part in the Tech Associates Prgram. This 2 year long track designed for early career professionals in IT included courses on public speaking, presentations, project management and teambuilding alongside a great community many of which I still stay in touch with years later. 
                                </p>
                                <br/>
                                <br/>
                                <br/>
                                <iframe style={{margin: 'auto', marginTop: "20px"}} width="560" height="315" src="https://www.youtube.com/embed/uHvZ744pUhY?si=sNq9bZpkJ3htLQ_7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <p className='readable'>
                        <br/>
                        After my initial project, I started working on business to business technologies, and realized that all my previous freelance and start-up experience had made me an excellent frontend programmer and designer. I built dashboards and for businesses to better understand the data from our end and communicate various claims. While my time at Chubb was cut short by an opportunity arising at Google, I was grateful for the people I met and the experiences I had along the way.
                        </p>
                    </div>
                </WorkElement>
                <WorkElement color='black' image={TempoTurtle} hiddenId="tempoInfo" alt="Tempo Turtle Logo" imageId="turtleLogo" jobTitle="TempoTurtle">
                    <div className='workInformation'>
                        <h1>Tempo Turtle</h1>
                        <h3>Co-Founder</h3>
                        <h3>January 2021 - Present</h3>
                        <br/>
                        <h3><a className="link" href='https://tempoturtle.com/' rel="noreferrer">Click here to visit our website!</a></h3>
                        <br/>
                        <p className='readable'>
                        Tempo Turtle is a music technology company created by myself and my good friend William Fann. We have worked on and off on this project for years and started our efforts with a handheld keyboard we designed specifically designed for music production. We have started many projects since then including an application for easily remapping the keyboard, and even dipped our toes into open source VR haptics projects. Currently we are working on creating audio plugins for adding unique effects to your Digital Audio Workstation. Plan is to release our project and make announcements Summer 2024!
                        </p>
                        <div className='pageSeparator'>
                            <div className='row rowPadding'>
                                <h2 style={{margin: 'auto', marginBottom: "20px"}}>Tempo Turtle's Bradpad Ad</h2>
                                <br/>
                                <iframe style={{margin: 'auto', marginTop: "20px"}} width="560" height="315" src="https://www.youtube.com/embed/v3fvVJyQHCg?si=52BBXcKyR4TEvP1F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </WorkElement>
                <WorkElement color='white' image={Octavate} hiddenId="octavateInfo" image2={OctavatLogo} alt="Octavate Logo" imageId2="octavateLogo" jobTitle="Octavate">
                    <div className='workInformation'>
                        <h1>Octavate</h1>
                        <h3>Full Stack Developer</h3>
                        <h3>May 2019-April 2021</h3>
                        <br/>
                        <p className='readable'>
                        At Octavate, I worked with a music-tech startup called Octavate. On this small team which I was been a part of for nearly 2 years
                        , I found myself developing multiple aspects of this company. I started as a database developer creating the schema to organize the large amounts 
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
                        <h3>June 2019-April 2021</h3>
                        <br/>
                        <h3><a className="link" href='https://www.brucefeiler.com/' rel="noreferrer">Click here to visit Bruce's website!</a></h3>
                        <br/>
                        <p className="readable">
                        For about 2 years I created web content for New York Times Best Selling Author and Ted Talk Speaker Bruce Feiler.
                        I developed various forms of content for his newest Book, such as an online interview with dynamic results and data visualizations based 
                        on the data of the novel. In his New York Times Best-Seller, Life Is in the Transitions: Mastering Change at Any Age, I created multiple visualizations 
                        that ended up in the pages of the book, based on data from over 200 interviews that I helped aggregate and organize.
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
                        <h3><a className="link" href='https://alexvrahas.com/' rel="noreferrer">Click Here To Check Out The Site</a></h3>
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
                        <h3><a className="link" href='https://prottaspainting.net/' rel="noreferrer" >Click Here To Check Out The Site</a></h3>
                        <br/>
                        <p className="readable">
                        This was my first paid website job, and it was a great experience to implement the skills I’d learn in college in a professional context. I was highered by Glenn Prottas who owns a local painting company in the hometown where I grew up. A pretty straightforward static site where design and ease of use became the focus for me.
                        </p>
                        <br/>
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
                        <h3 className="workLink"><a className="link" href='http://dmri.slicer.org/' rel="noreferrer" >Click Here To Check Out SlicerDMRI's site</a></h3>
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