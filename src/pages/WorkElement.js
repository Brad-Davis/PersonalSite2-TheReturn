import React from "react";
import './index.css';
import './mainPageText.css';

class WorkElement extends React.Component {

    render(){
            return <div>
                    <div class="halfScreen">
                        <div class="clickToGo hoverGrow" id={this.props.imageId} style={{ backgroundImage:`url(${this.props.image})`}}>
                            {/* <img src={this.props.image} alt={this.props.alt} /> */}
                        </div>
                        <div class="clickToGo hoverNone" id={this.props.imageId2} style={{ backgroundImage:`url(${this.props.image2})`}}>
                            {/* <img src={this.props.image} alt={this.props.alt} /> */}
                        </div>
                        <div class="centerDiv hiddenInfo">
                            <div class="jobTitle">
                                {this.props.jobTitle}
                            </div>
                            <a class="moreInfo">
                                Click here for more info
                            </a>
                        </div>
                    </div>
                </div>
    }
}


export default WorkElement;