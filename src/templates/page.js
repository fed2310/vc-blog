import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import url from 'url'
import { Layout, Podcasts } from '../components/common'
import { MetaData } from '../components/common/meta'
import Roi from '../tools/Roi/index'

import Leadership from '../tools/Leadership/index'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location, canonical }) => {
    console.log(data)
    console.log(location.pathname)
    const page = data.ghostPage
    return (
        <>
            <MetaData
                data={data.ghostPage}
                location={location}
                type="website"
            />

            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
                <title>{page.title}</title>
                <meta name="description" content={page.meta_description} />
                <meta property="og:site_name" content="Vantage Fit" />
                <meta property="og:title" content={page.meta_title} />
                <meta property="og:description" content={page.meta_description} />
                <meta name="twitter:title" content={page.meta_title} />
                <meta name="twitter:description" content={page.meta_description} />
                <meta property="og:title" content={page.meta_title} />
                <meta property="og:description" content={page.meta_description} />
            </Helmet>
            <Layout>
                <div className="page-wrapper">
                    <div className="page-inner">   
                        <div className="container">
                            <div className="tag-header text-center">
                                <h1> {page.title}</h1>
                            </div>
                        </div> 
                        {location.pathname !== '/podcasts/' || location.pathname !== '/podcasts' ? 
                            <section
                                className="container content-body load-external-scripts "
                                dangerouslySetInnerHTML={{ __html: page.html }}
                            /> : null }
                    </div>
                </div>
                {location.pathname === '/podcasts/' || location.pathname === '/podcasts' ? 
                    <div className="page-wrapper" >
                        <div className="page-inner">
                            <div className="container">
                                <div className="tag-header text-center">
                                    <p>
                                        Listen to Vantage HR Influencers podcast where we bring in HR thought leaders<br/> who will talk about engagement, compensation, benefits, and everything related to HR. 
                                    </p>
                                    <div>
                                        <a href="https://open.spotify.com/show/4ZHicqzBoM5FpRtVg9bvLU" target="_blank" style={{marginRight: "10px"}}>
                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1607339605/blog_images/images/spotify-podcast.png" alt="Spotify Podcasts" style={{marginBottom: "10px"}} />
                                        </a>
                                        <a href="https://podcasts.apple.com/in/podcast/vantage-influencers-podcast/id1485394710" target="_blank">
                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1607339591/blog_images/images/apple-podcast.png" alt="Apple Podcasts" style={{marginBottom: "10px"}} />
                                        </a>
                                    </div>
                                </div>
                                <Podcasts />
                            </div>
                        </div>
                    </div> : null 
                }
                {location.pathname === '/roi-calculator/' || location.pathname === '/roi-calculator' ? <Roi/> : null 
                }
                {location.pathname === '/test-calculator/' || location.pathname === '/test-calculator' ? <Leadership/> : null 
                }
            </Layout>
        </>
    )
}
export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
        
    }
`
