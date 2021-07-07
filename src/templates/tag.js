import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, HeadPost, TopPosts, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges
    // console.log(pageContext)

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <Layout>
                <div id="content" className="container single-blog-post">
                    <div className="row loop">
                        <div className="col-12 pclr">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="tag-header">
                                        <h1>{tag.name}</h1>
                                        {tag.description ? <p>{tag.description}</p> : null }
                                    </div>
                                </div>
                            </div>
                            <div className="row loop padntop-allblogs">
                                <div className="col-12 item pclr">
                                    <div className="row">
                                        {posts.map(({ node }) => (
                                            <div className="col-12 col-md-4 col-lg-4 item tag-headpost" key={node.id}>
                                                <PostCard post={node} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row loop">
                                <div className="col-12 pagination-aria">
                                    <Pagination pageContext={pageContext} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
            <div id="modalback" className=""></div>
        </>
    )
}

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
