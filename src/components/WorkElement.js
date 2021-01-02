import React, {useState, useRef} from "react";
import '../pages/index.css';
import './mainPageText.css';
import Chevron from "./Chevron.js"
import scrollTo from 'gatsby-plugin-smoothscroll';

function WorkElement(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("chevron");

    const content = useRef(null);

    function toggleWorkContent(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "chevron" : "chevron rotate");
        if(setActive !== "active"){
            setTimeout(() => {
                scrollTo("#" + props.hiddenId);
            }, 200);
            
        }
        
        
    }

    

    return <div>
            <div className="halfScreen" onClick={() => {toggleWorkContent()}}>
                <div className="clickToGo hoverGrow" id={props.imageId} style={{ backgroundImage:`url(${props.image})`}}>
                    {/* <img src={props.image} alt={props.alt} /> */}
                </div>
                <div className="clickToGo hoverNone" id={props.imageId2} style={{ backgroundImage:`url(${props.image2})`}}>
                    {/* <img src={props.image} alt={props.alt} /> */}
                </div>
                <div className="centerDiv hiddenInfo">
                    <div className="jobTitle">
                        {props.jobTitle}
                    </div>
                    <a className="moreInfo">
                        Click here for more info
                    </a>
                </div>
                <Chevron color={`${props.color}`} className={`${setRotate}`} />

            </div>
            
            <div id={props.hiddenId} ref={content} style={{maxHeight: `${setHeight}`}} className="workContent">
                {props.children}
            </div>
                
        </div>
}


export default WorkElement;