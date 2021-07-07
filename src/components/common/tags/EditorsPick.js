import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const TopPosts = ({src}) => {

    const data = useStaticQuery(graphql`
    query MyQuery1 {
        allGhostPost(sort: {order: DESC, fields: published_at}, limit: 3, filter: {tags: {elemMatch: {name: {eq: "#editors-pick"}}}}) {
            nodes {
                id
                title
                slug
                tags {
                    name
                    slug
                }
            }
        }
      }
    `)

    const items = []
    {data.allGhostPost.nodes.map((post, index) => {
        const tagurl = `/tag/${post.tags[0].slug}/`
        const url = `/${post.slug}/`
        items.push(<div className="col-12 item pclr" key={index}><article><div className="top-post-details"><a href={url} title={ post.title }><h2 className="top-post-title">{ post.title }</h2></a><div className="top-post-tags tags"><a href={ tagurl }>{post.tags[0].name}</a></div></div></article></div>)
    })}

    return (
        <div>
            {items}
        </div>
    )
}

export default TopPosts
