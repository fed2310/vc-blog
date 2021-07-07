import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const RelatedPosts = ({ post }) => {
    const url = `/podcasts/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    console.log(post)
    // console.log(readingTime)
    return (
        <article className="row col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="col-12 pclr">
                <div className="post">
                    <div className="post-inner-content">
                        <div className="img-holder">
                            <a href={ url } className="featured-image" title={ post.title }>
                                <img className="img-responsive" src={ post.feature_image } alt={ post.title}/>
                            </a>
                        </div>
                        <div className="inner">
                            <h2 className="post-title">
                                <a href={ url } title={ post.title }> { post.title }</a>
                            </h2>
                            <div className="readmore flw100">
                                <a href={ url } title={ post.title }>Listen Now ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

RelatedPosts.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default RelatedPosts
