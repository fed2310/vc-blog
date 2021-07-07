import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Layout, PostCard, HeadPost, Pagination, TopPosts, EditorsPick, TagsTabs, CuratedPosts, EmployeeEngagement, RewardsRecogntion, PerformanceManagement, EmployeeSurvey, Management, RemoteWork, Recruitment, CompanyCulture, WorkplaceCommunication, EmployeeBenefits, Popup3, Popup1} from '../components/common'
import { MetaData } from '../components/common/meta'
import HubspotForm from 'react-hubspot-form'
import LazyLoad from 'react-lazy-load'
import CustomModal from '../components/common/CustomModal'
/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    // const headpost = data.allGhostPost.edges
    // const posts = data.allGhostPost.edges.slice(1)
    const posts = data.allGhostPost.edges
    // console.log(posts)

    const [modalOpen, setModalOpen] = useState(false)
    const [modalNo, setModalNo] = useState(null)
    const toggleModal = () => setModalOpen(!modalOpen);

    const modalRender = ()=> {
        return (
            <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                {modalNo == 1 && <Popup3/>}
                {modalNo == 2 && <Popup1/>}
            </CustomModal>
        )
    }
    const handleDownloadNow = (num) => {
        toggleModal()
        if(num == 1) setModalNo(1)  
        if(num == 2) setModalNo(2)          
    }

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <div className="row loop">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 item pclr">
                            <div className="col-12 pclr">
                                <div className="row">
                                    {posts.slice(0,5).map(({ node }) => (
                                        <div key={node.id} className="col-12 col-md-6 col-lg-6 item headpost">
                                            <PostCard post={node} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 top-posts">
                            <div className="row">

                                <div className="col-12 pclr rhs-posts">
                                    <div className="popular-posts">Most Popular Posts</div>
                                    <TopPosts src='toposts'/>
                                </div>

                                <div className="col-12 pclr rhs-posts">
                                    <div className="popular-posts">Explore our Free Resources</div>
                                    <article className="col-12 item pclr">
                                        <a className="top-post-details pclr d-flex" href="https://www.vantagecircle.com/resources/">
                                            <div className="iconwrapr"><div className="all-images res1"></div></div>
                                            <div className="p15"><h2 className="top-post-title mb0">Guides and Ebooks</h2></div>
                                        </a>
                                    </article>
                                    <article className="col-12 item pclr">
                                        <Link className="top-post-details pclr d-flex" to="/podcasts/">
                                            <div className="iconwrapr"><div className="all-images res2"></div></div>
                                            <div className="p15"><h2 className="top-post-title mb0">Vantage Influencers Podcasts</h2></div>
                                        </Link>
                                    </article>
                                    <article className="col-12 item pclr">
                                        <a className="top-post-details pclr d-flex" href="https://www.vantagecircle.com/webinars/">
                                            <div className="iconwrapr"><div className="all-images res3"></div></div>
                                            <div className="p15"><h2 className="top-post-title mb0">Vantage Doers Webinar</h2></div>
                                        </a>
                                    </article>
                                    <article className="col-12 item pclr">
                                        <a className="top-post-details pclr d-flex" href="https://www.vantagecircle.com/case-study/">
                                            <div className="iconwrapr"><div className="all-images res4"></div></div>
                                            <div className="p15"><h2 className="top-post-title mb0">Case Studies</h2></div>
                                        </a>
                                    </article>
                                </div>

                                <div className="col-12 pclr rhs-posts">
                                    <div className="popular-posts">Editor's Pick</div>
                                    <EditorsPick src='editorspick'/>
                                </div>

                                <div className="col-12 pclr">
                                    <div className="homepage-ebook-section1">
                                        <div className="text-center">
                                            <div>
                                                <img loading="lazy" width="160" height="160" src="https://res.cloudinary.com/vantagecircle/image/upload/w_160/v1607074087/blog_images/images/ebook-new.png" alt="The Ultimate Guide to Employee Rewards and Recognition " />
                                            </div>
                                            <h3>The Ultimate Guide to <br/> Employee Rewards <br/> and Recognition </h3>
                                            <div className="learnmore-btn" style={{cursor: 'pointer'}}><a className="download_cta_banner_popup" onClick={()=>handleDownloadNow(1)}>Download Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TagsTabs />

                <div className="container ebook-container-home">
                    <div className="row loop">
                        <div className="col-12">
                            <div className="row">
                                <div className="ebook-banner-home">
                                    <div className="row d-flex">
                                        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                                            <div className="img-cont">
                                                <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_180/v1609322665/blog_images/images/wfh-book.png" alt="Work from Home Guide"  width="180" height="250"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                                            <div className="contenttag1">FREE RESOURCE</div>
                                            <h3 className="">Work from Home</h3>
                                            <p>A Definitive Guide for Managers</p>
                                            <div className="learnmore-btn" style={{cursor: 'pointer'}}><a className="download_cta_banner_popup" onClick={()=>handleDownloadNow(2)}>Download Now</a></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscription-home">
                    <div className="all-images subs1"></div>
                    <div className="all-images subs2"></div>
                    <div className="all-images subs3"></div>
                    <div className="all-images subs4"></div>
                    <div className="all-images subs5"></div>
                    <div className="all-images subs6"></div>
                    <div className="container">
                        <div className="col-12">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-sm-12 col-md-8 col-md-8">
                                    <h3>Are you someone<br/>who seeks up-to-date tips<br/>& tricks for better employee<br/>engagement?</h3>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 sidebar">
                                    <div className="subscribe_wrapper">
                                        <LazyLoad offset={500}>
                                            <HubspotForm
                                                portalId='6153052'
                                                formId='11096ea9-7d2d-4ea5-99ba-42d0b7e11f81'
                                                onSubmit={() => console.log('Submit!')}
                                                onReady={(form) => console.log('Form ready!')}
                                                loading={<div>Loading...</div>}
                                            />
                                        </LazyLoad>
                                        <p className="notetext flw100">We safeguard your personal information in accordance with our <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                                    </div>
                                    <div className="subs-img flw100">
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1609227210/blog_images/images/img11.png" alt="Subscribe" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
            {modalRender()}
            <div id="modalback" className=""></div>
        </>
    )
}


Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        filter: {tags: {elemMatch: {name: {ne: "#Podcasts"}}}},
        sort: { order: DESC, fields: [published_at] },
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
