import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { Disqus } from 'gatsby-plugin-disqus'
import { Layout, RecentPodcasts } from '../components/common'
import { MetaData } from '../components/common/meta'
// import config from '../utils/siteConfig'
// import LazyLoad from 'react-lazy-load'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const recentpodcasts = data.allGhostPost.edges
    // let disqusConfig = {
    //     url: `${config.siteUrl+location.pathname}`,
    //     identifier: post.id,
    //     title: post.title,
    // }
    console.log(data.allGhostPost.edges)
    console.log(post)
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <article className="content content-inner">
                    
                    <div className="row single-post post-full-content pstcontent">
                        <div className="post_header_wrapper">
                            <div className="post-meta">
                                <nav className="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="https://www.vantagecircle.com/" target="_blank" rel="noopener noreferrer">Home</a></li>

                                        <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                                        
                                        <li className="breadcrumb-item"><Link to="/podcasts/">Podcasts</Link></li>
                                        
                                        <li className="breadcrumb-item">{post.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-sm-12 single-post-title">
                                        <h1 className="content-title">{post.title}</h1>
                                        <div className="sub-title-wrapper">
                                            <div className="updated_date">
                                                Last Updated on {post.updated_at_pretty}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The main post content */ }
                        <section
                            className="content-body load-external-scripts editor-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </div>

                    {/* <div className="row post-full-content">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center disqus-wrapper">
                                    <LazyLoad offsetTop={400}>
                                        <Disqus config={disqusConfig} />
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                    </div> */ }

                    <div className="related-posts container">
                        <div className="col-12 pclr item">
                            <div className="row loop">
                                <div className="col-12">
                                    <hr/>
                                    <h3>You might also like</h3>
                                </div>
                                {recentpodcasts.map(({ node }) => (
                                    <RecentPodcasts key={node.id} post={node}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </article>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }allGhostPost(
            filter: {tags: {elemMatch: {name: {eq: "#Podcasts"}}}}
            sort: { order: DESC, fields: [published_at] },
            limit: 3,
        ) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
    }
`
