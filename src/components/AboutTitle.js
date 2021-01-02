import React from "react";

class AboutTitle extends React.Component {
    //THIS IS A LARGE OBNOXIOUS ATTEMPT TO TRY TO ANIMATE ON SCROLL
    // constructor(props){
    //     super(props);
    //     this.header = React.createRef();
    // }

    // componentDidMount() {
    //     var h1 = parseInt(this.header.scrollHeight);
    //     console.log(this.header)
    //     window.addEventListener('scroll', this._calcScroll.bind(this, h1));
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this._calcScroll)
    // }
    
    // _calcScroll(h1) {
    //     var _window = window;
    //     var heightDiff = parseInt(h1);
    //     // console.log(heightDiff);
    //     // console.log('woah')
    //     var scrollPos = _window.scrollY;
    //     // console.log(scrollPos);
    //     if (scrollPos > heightDiff) {
    //         // here this means user has scrolled past your header, 
    //         // you may rerender by setting State or do whatever
    //         console.log('woah')
    //         this.setState({
    //             'active': true
    //             //stateKey: stateValue,
    //         });
    //     } else {
    //         // here the user has scrolled back to header's territory, 
    //         // it's optional here for you to remove the element on navbar as stated in the question or not
    //         this.setState({
    //             'active': false
    //             //stateKey: stateValue,
    //         });
    //     }
    // }
    
    render() {
        return (<div className="gridParent"><svg id={this.props.id} data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" className={this.props.className} width="928" height="206" viewBox="0 0 928 206" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M131.328 158.4H43.776L27.648 203.04H0L72.576 3.456H102.816L175.104 203.04H147.456L131.328 158.4ZM123.84 137.088L87.552 35.712L51.264 137.088H123.84Z" stroke="white" strokeWidth="5"/>
        <path d="M307.247 99.648C314.543 100.8 321.166 103.776 327.118 108.576C333.262 113.376 338.062 119.328 341.518 126.432C345.166 133.536 346.991 141.12 346.991 149.184C346.991 159.36 344.399 168.576 339.215 176.832C334.031 184.896 326.447 191.328 316.463 196.128C306.671 200.736 295.055 203.04 281.615 203.04H206.734V2.304H278.734C292.366 2.304 303.983 4.608 313.583 9.216C323.183 13.632 330.382 19.68 335.182 27.36C339.983 35.04 342.383 43.68 342.383 53.28C342.383 65.184 339.119 75.072 332.591 82.944C326.255 90.624 317.807 96.192 307.247 99.648ZM232.943 88.992H277.007C289.295 88.992 298.798 86.112 305.518 80.352C312.238 74.592 315.599 66.624 315.599 56.448C315.599 46.272 312.238 38.304 305.518 32.544C298.798 26.784 289.103 23.904 276.431 23.904H232.943V88.992ZM279.311 181.44C292.367 181.44 302.542 178.368 309.839 172.224C317.134 166.08 320.783 157.536 320.783 146.592C320.783 135.456 316.943 126.72 309.263 120.384C301.583 113.856 291.311 110.592 278.447 110.592H232.943V181.44H279.311Z" stroke="white" strokeWidth="5"/>
        <path d="M474.367 205.056C455.743 205.056 438.752 200.736 423.392 192.096C408.032 183.264 395.839 171.072 386.815 155.52C377.983 139.776 373.568 122.112 373.568 102.528C373.568 82.944 377.983 65.376 386.815 49.824C395.839 34.08 408.032 21.888 423.392 13.248C438.752 4.416 455.743 0 474.367 0C493.183 0 510.271 4.416 525.631 13.248C540.991 21.888 553.087 33.984 561.919 49.536C570.751 65.088 575.167 82.752 575.167 102.528C575.167 122.304 570.751 139.968 561.919 155.52C553.087 171.072 540.991 183.264 525.631 192.096C510.271 200.736 493.183 205.056 474.367 205.056ZM474.367 182.304C488.383 182.304 500.959 179.04 512.095 172.512C523.423 165.984 532.255 156.672 538.591 144.576C545.119 132.48 548.383 118.464 548.383 102.528C548.383 86.4 545.119 72.384 538.591 60.48C532.255 48.384 523.519 39.072 512.383 32.544C501.247 26.016 488.575 22.752 474.367 22.752C460.159 22.752 447.488 26.016 436.352 32.544C425.216 39.072 416.383 48.384 409.855 60.48C403.519 72.384 400.352 86.4 400.352 102.528C400.352 118.464 403.519 132.48 409.855 144.576C416.383 156.672 425.216 165.984 436.352 172.512C447.68 179.04 460.351 182.304 474.367 182.304Z" stroke="white" strokeWidth="5"/>
        <path d="M635.398 2.304V129.312C635.398 147.168 639.718 160.416 648.358 169.056C657.19 177.696 669.382 182.016 684.934 182.016C700.294 182.016 712.294 177.696 720.934 169.056C729.766 160.416 734.182 147.168 734.182 129.312V2.304H760.39V129.024C760.39 145.728 757.03 159.84 750.31 171.36C743.59 182.688 734.47 191.136 722.95 196.704C711.622 202.272 698.854 205.056 684.646 205.056C670.438 205.056 657.574 202.272 646.054 196.704C634.726 191.136 625.702 182.688 618.982 171.36C612.454 159.84 609.19 145.728 609.19 129.024V2.304H635.398Z" stroke="white" strokeWidth="5"/>
        <path d="M927.661 2.304V23.616H872.941V203.04H846.733V23.616H791.725V2.304H927.661Z" stroke="white" strokeWidth="5"/>
        </svg></div>);
    }
    
    
    
}

export default AboutTitle;