import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NavbarBlog from "../components/NavbarBlog.js";
import BlogTitle from '../components/BlogTitle.js';
import '../pages/index.css';

export default function BlogPost({ data }) {
  let post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <div>
      <div className="container">
        <div>
          <div className="blogNav">
            <BlogTitle />
            <NavbarBlog />
          </div>
          <Img className="blogImage" fluid={featuredImgFluid} />
        </div>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

    </div>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;