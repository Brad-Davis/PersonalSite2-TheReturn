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
            scrollTo("#" + props.hiddenId);
        }
    }


    return <div>
            <div class="halfScreen" onClick={toggleWorkContent}>
                <div class="clickToGo hoverGrow" id={props.imageId} style={{ backgroundImage:`url(${props.image})`}}>
                    {/* <img src={props.image} alt={props.alt} /> */}
                </div>
                <div class="clickToGo hoverNone" id={props.imageId2} style={{ backgroundImage:`url(${props.image2})`}}>
                    {/* <img src={props.image} alt={props.alt} /> */}
                </div>
                <div class="centerDiv hiddenInfo">
                    <div class="jobTitle">
                        {props.jobTitle}
                    </div>
                    <a class="moreInfo">
                        Click here for more info
                    </a>
                </div>
                <Chevron className={`${setRotate}`} />
            </div>
            <div id={props.hiddenId} ref={content} style={{maxHeight: `${setHeight}`}}
                className="workContent"
                dangerouslySetInnerHTML={{__html: props.content}}
            />
        </div>
}


export default WorkElement;