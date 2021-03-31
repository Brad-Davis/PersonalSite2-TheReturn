import React, { Component } from 'react';
import { Link } from 'gatsby';
const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/800";
const MEDIUM_URL = "https://medium.com";

class MediumPost extends Component {
    render() {
        return (
            <div className="postContainer" key={this.props.id}>
                <div className="postText">
                    <h5>
                        <a className="link" target="_blank" href={`${MEDIUM_URL}/@${this.props.username}/${this.props.slug}`} >
                            {this.props.title}
                        </a>
                    </h5>
                    <small>

                        <a className="link" target="_blank" href={`${MEDIUM_URL}/@${this.props.username}`}>
                            Brad Davis
                        </a>
                        , {this.props.date}
                    </small>
                    <p style={{ lineHeight: '1' }}>{this.props.subtitle}</p>
                </div>
                <div className="imageContainer">
                    <img className="blogThumbnail" src={`${MEDIUM_CDN}/${this.props.image}`} />
                </div>
            </div>
        );
    }
}

export default MediumPost;