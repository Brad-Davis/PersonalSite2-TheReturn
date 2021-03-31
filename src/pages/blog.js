import React from "react"
import NavbarBlog from "../components/NavbarBlog.js";
import './index.css';
import './blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogTitle from '../components/BlogTitle.js';
import BlogQuery from '../components/BlogQuery';
import Brad from "../images/brick.jpg"





// const PostContainer = styled.div`
//   position: relative;
//   height: 100%;
//   padding: 0 0 0 150px;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: flex-start;
//   align-items: center;
// `;



export default function Blog() {

  return (
    <div>
      <div className="blogBackground" style={{ backgroundSize: "cover", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(" + Brad + ")" }}></div>
      <div className="container">
        <div className="stickyTop">
          <div className="blogNav row">
            <div className="col-lg-6">
              <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" className="blogTitle">
                <BlogTitle />
              </div>

            </div>
            <div className="col-lg-6">
              <NavbarBlog />
            </div>
          </div>
          <h5 className="blogHeader">Writting about projects, interests and just showing y’all what’s going on with me!</h5>

        </div>
        <BlogQuery />
      </div>

    </div >
  )
}
