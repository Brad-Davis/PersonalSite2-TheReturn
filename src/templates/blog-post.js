import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NavbarBlog from "../components/NavbarBlog.js";
import BlogTitle from '../components/BlogTitle.js';
import '../pages/index.css';
import Brad from "../images/brick.jpg"

export default function BlogPost({ data }) {
  let post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <div>
      <div className="blogBackground" style={{ backgroundSize: "cover", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(" + Brad + ")" }} />
      <div className="container">
        <div className="stickyTop">
          <div className="blogNav row">
            <div className="col-lg-6">
              <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" className="blogTitle">
                BLOG
              </div>

            </div>
            <div className="col-lg-6">
              <NavbarBlog />
            </div>
          </div>
          <div>
            <h1 className="blogHeader">{post.frontmatter.title}</h1>
            <h5 className="centeredText" style={{ color: "white" }}>
              {post.excerpt}
            </h5>
            <div>
              <div className="row">
                <div className="col-lg-9">
                  <Img className="blogThumbnail" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                <div className="col-lg-3">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// export const query = graphql`
//   query BlogQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         author
//         date(formatString: "MMMM DD, YYYY")
//         tags
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       excerpt
//       id
//     }
//   }
// `;