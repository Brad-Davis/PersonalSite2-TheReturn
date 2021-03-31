import React, { Component, useState } from 'react';
import MediumPost from "../components/MediumPost";
import { StaticQuery, graphql } from "gatsby"
import HorizontalScroll from "../components/HorizontalScroll";
import styled from 'styled-components'

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
export default function BlogContent() {
    return (
        <div>


            <StaticQuery
                query={graphql`
                    query Medium {
                        allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
                            totalCount
                            edges {
                            node {
                                id
                                uniqueSlug
                                title
                                createdAt(formatString: "MMM YYYY")
                                virtuals {
                                    subtitle
                                    readingTime
                                    previewImage {
                                            imageId
                                        }
                                    }
                                    author {
                                    username
                                    }
                            }
                            }
                        }
                    }
                    `}

                render={({ allMediumPost }) => (


                    <div>
                        {
                            allMediumPost.edges.map(post => (
                                <MediumPost date={post.node.createdAt} image={post.node.virtuals.previewImage.imageId} title={post.node.title} slug={post.node.uniqueSlug} username={post.node.author.username} subtitle={post.node.virtuals.subtitle} />
                            ))
                        }
                    </div>


                )}
            />

            {/* <article className="postContainer">
                <div className="postText">
                    <div className="postTitle">
                        <h2>More Blog Posts To Come!</h2>
                    </div>
                    <p>I will be working to release a new blog post every 2 weeks on Friday! I'll be posting all my blogs on medium as well.</p>
                </div>
            </article> */}

        </div >
    );
}