import React from "react"
import NavbarBlog from "../components/NavbarBlog.js";
import './index.css';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogTitle from '../components/BlogTitle.js';
import styled from 'styled-components'
import HorizontalScroll from "../components/HorizontalScroll";
import Brad from "../images/brick.jpg"



const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

// const PostContainer = styled.div`
//   position: relative;
//   height: 100%;
//   padding: 0 0 0 150px;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: flex-start;
//   align-items: center;
// `;



export default function Blog({ data }) {

  const { posts } = data.blog;




  return (

    <div>
      <div className="blogBackground" style={{ backgroundSize: "cover", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(" + Brad + ")" }} />
      <div className="container">
        <div className="stickyTop">
          <div className="blogNav row">
            <div className="col-lg-6">
              <div className="blogTitle">
                BLOG
              </div>

            </div>
            <div className="col-lg-6">
              <NavbarBlog />
            </div>
          </div>
          <h3 className="blogHeader">Writting about projects, interests and just showing y’all what’s going on with me!</h3>
          <h5 className="centeredText" style={{ color: "white" }}>
            Scroll down to check out all my posts
          </h5>
        </div>
      </div>
      <HorizontalSection>
        <HorizontalScroll>
          <div className="fixedContainer">
            {posts.map(post => (
              <article className="postContainer" key={post.id}>
                <Link className="postTitle" to={"/blog" + post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <small>
                  {post.frontmatter.author}, {post.frontmatter.date}
                </small>
                <p>{post.excerpt}</p>
                <Img style={{ transform: "rotate(" + (Math.random() * 12 - 6) + "deg)" }} className="blogThumbnail" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
              </article>
            ))}
          </div>
        </HorizontalScroll>
      </HorizontalSection>
    </div >
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`