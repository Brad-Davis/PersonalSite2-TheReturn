import React from "react"
import WorkElement from "./WorkElement.js"
import './index.css' 
import Navbar from "./Navbar";
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

       return <div class="splitSection">
           <div class="fullImage image1">
                <Navbar />
            </div>
           <div class="text" style={{padding: '0px'}}>
                <div class="workContainer">
                <WorkElement image={Octavate} image2={OctavatLogo} alt="an image of a brain being visualized by MRI information and SlicerDMRI" imageId2="octavateLogo" jobTitle="SlicerDMRI Internship" />
                <div class="hiddenInfo" id="octavateHidden">
                    
                </div>
                <WorkElement image={Bruce} alt="an image of a brain being visualized by MRI information and SlicerDMRI" imageId="bruceImage" jobTitle="SlicerDMRI Internship" />
                <div class="hiddenInfo" id="bruceHidden">
                    
                </div>
                <WorkElement image={Alex} image2={Alex2} alt="an image of a brain being visualized by MRI information and SlicerDMRI" imageId2="alexLogo" jobTitle="SlicerDMRI Internship" />
                <div class="hiddenInfo" id="alexHidden">
                    
                </div>
                <WorkElement image={Prottas} alt="an image of a brain being visualized by MRI information and SlicerDMRI" imageId="prottasImage" jobTitle="SlicerDMRI Internship" />
                <div class="hiddenInfo" id="prottasHidden">
                    
                </div>
                <WorkElement image={Slicer} alt="an image of a brain being visualized by MRI information and SlicerDMRI" imageId="slicerImage" jobTitle="SlicerDMRI Internship" />
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