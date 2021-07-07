import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const Podcasts = ({src}) => {

    const data = useStaticQuery(graphql`
    query podcastQuery {
        allGhostPost(sort: {order: DESC, fields: published_at}, filter: {tags: {elemMatch: {name: {eq: "#Podcasts"}}}}) {
            nodes {
                id
                title
                slug
                tags {
                    name
                    slug
                }
                feature_image
            }
        }
      }
    `)
    console.log(data.allGhostPost.nodes)


    const items = []
    {data.allGhostPost.nodes.map((post, index) => {
        const url = `/podcasts/${post.slug}/`
        items.push(<article className="row col-12 col-sm-6 col-md-4 col-lg-4" key={index}><div className="col-12 pclr"><div className="post"><div className="post-inner-content"><div className="img-holder"><a href={ url } className="featured-image" title={ post.title }><img width="340" height="191" className="img-responsive" src={ post.feature_image } alt={ post.title}/></a></div><div className="inner"><h2 className="post-title"><a href={ url } title={ post.title }> { post.title }</a></h2><a href={ url } className="excerpt" title={ post.title }>{ post.excerpt }</a><div className="readmore flw100"><a href={ url } title={ post.title }>Listen Now ></a></div></div></div></div></div></article>)
    })}

    return (
        <div className="row loop padntop-allblogs">
            {items}
        </div>
    )
}

export default Podcasts

