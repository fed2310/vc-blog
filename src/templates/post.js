import React from 'react'
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout, RelatedPosts, Cta1, Cta2, Cta3, Cta4, Cta5, Cta6, Cta7, Cta8, Cta9, Cta10 } from '../components/common'
// import { Layout, RelatedPosts, Cta1, Cta2, Cta3, Cta4, Cta5, Cta6, Cta7, Cta8, Cta9, Cta10, RnrCta } from '../components/common'
import { MetaData } from '../components/common/meta'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
// import config from '../utils/siteConfig'
// import { Disqus } from 'gatsby-plugin-disqus'
import LazyLoad from 'react-lazy-load'
import HubspotForm from 'react-hubspot-form'
import useLookupApi from '../hooks/useLookupApi'
import InternalTagsPopup from '../components/common/InternalTagsPopup'
//tools
import Leadership from '../tools/Leadership/index'
import {addLazyLoading} from '../utils/helpers'
// import PercentageCircle from '../components/tools/percentage-circle/index'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location, pageContext }) => {
    const post = data.ghostPost
    const geoLocation = useLookupApi();
    let tagurl = `/tag/`
    let tagname = ``
    if (post.tags.length>0){
        tagurl+= `${post.tags[0].slug}/`
        tagname = post.tags[0].name
    }
    const relatedposts = data.allGhostPost.edges
    const baseurl = 'https://blog.vantagecircle.com/'

    let ptag = ''
    if(post.primary_tag){
        ptag = post.primary_tag
    }else{
        ptag = ''
    }
    
    let hashtag = ''
    let fullwidthtemplate = ''
    const itag = post.tags.some(item => item.name === '#comparisonarticles');
    const fullwidth = post.tags.some(item => item.name === "#fullwidth");
    if(itag){
        hashtag = itag
    }else{
        hashtag = ''
    }
    if(fullwidth){
        fullwidthtemplate = fullwidth
    } else {
        fullwidthtemplate = ''
    }
    
    const newPosts = addLazyLoading(post)

    const readingTime = readingTimeHelper(post)
    // let disqusConfig = {
    //     url: `${config.siteUrl+location.pathname}`,
    //     identifier: post.id,
    //     title: post.title,
    // }

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            
                <Helmet>
                    <style type="text/css">{`${post.codeinjection_styles}`}</style>
                    { hashtag && <style type="text/css">{`
                        .content-inner .editor-content hr{
                            margin: 30px 0 0;
                        }
                        .content-inner .editor-content ol{
                            padding-left: 1em;
                            margin-bottom: 0;

                        }
                        .content-inner .editor-content ol ul{
                            padding-left: 0;
                            margin-top: 5px;
                            margin-bottom: 15px;
                        }
                        .content-inner .editor-content h4{
                            margin-top: 15px;
                            margin-bottom: 10px;
                        }
                        .content-inner .editor-content ul{
                            padding-left: 0.5em;
                            float: left;
                            width: 100%;
                        }
                        .content-inner .editor-content ul>li{
                            float: left;
                            padding-left: 17px;
                            margin-right: 30px;
                        }
                        .content-inner .editor-content ul.share.post-share>li{
                            float: none;
                        }
                        .content-inner .editor-content ul>li:before{
                            content: '';
                            display: block;
                            width: 7px;
                            height: 14px;
                            border-width: 0 2px 2px 0!important;
                            transform: rotate(45deg);
                            border: solid #5b3b97;
                            border-radius: 0;
                            background: transparent;
                            top: 7px;
                            margin-top: 0;
                        }
                        .content-inner .editor-content ol>li{
                            margin-bottom: 0;
                        }
                    `}</style>}
            </Helmet> 
            <Layout>
                {/* {(()=> {
                    if (post.slug === 'attrition-rate-definition-and-calculation') {
                        return <RnrCta />;
                    }
                })()} */}


                <div id="content" className="container custom_container single-blog-post">
                    <div className="row loop">
                        <div className="col-12 pclr">
                            { fullwidthtemplate === true ? 
                                <div className = "fullWidthTemplate">
                                    <div className="post-full-content ">
                                        <div className="row loop ">
                                        <div className="col-12 pclr">
                                            <article className="content content-inner">
                                            <div className="fullwidthbanners shareB">
                                                <div className = "editor-content col-12 fullwidthshare">
                                                    <div className=" showHide">
                                                    <ul className="share post-share">
                                                        <li>
                                                            <a rel="nofollow" href={'https://www.facebook.com/sharer/sharer.php?u='+ baseurl + pageContext.slug} className="facebook" target="_blank" title="Facebook" rel="noopener noreferrer">
                                                                <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" fill="#3b5998"></path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href={'https://linkedin.com/shareArticle?url='+ baseurl + pageContext.slug } className="linkedin" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                                                <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill="#0077B5"/>
                                                                    <path d="m.396 7.977h4.976v16.023h-4.976z" fill="#0077B5"/>
                                                                    <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill="#0077B5"/>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href={'https://twitter.com/share?url='+ baseurl + pageContext.slug + '&text=' + post.title} className="twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                                                                <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" fill="#1da1f2"></path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                                </div>
                                                <div className="row single-post  pstcontent">
                                                    <div className="post-container container">
                                                        <div className="post_header_wrapper">
                                                            <div className="post-meta">
                                                                <nav className="breadcrumb">
                                                                    <ol className="breadcrumb">
                                                                        <li className="breadcrumb-item"><a href="https://www.vantagecircle.com/" target="_blank" rel="noopener noreferrer">Home</a></li>
                
                                                                        <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                                                                        
                                                                        {post.tags && post.tags[0].name !=='#Podcasts' && <li className="breadcrumb-item"><Link to={ tagurl }>{tagname}</Link></li>}
                                                                        
                                                                        <li className="breadcrumb-item">{post.title}</li>
                                                                    </ol>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                                <div className="single-post  pstcontent editor-content">
                                                    <section
                                                    className="col-12 content-body load-external-scripts "
                                                    dangerouslySetInnerHTML={{ __html: newPosts }}
                                                    />
                                                    <div className="col-12 row content-body">
                                                        <div className="row company-details-wrapper">
                                                            <div className="col-sm-4 company-details-img">
                                                                <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1581416589/vantagecms/uploads/2020/02/vantage-circle-logo-1.png" alt="Vantage Circle logo" width="100" height="50" loading="lazy"/>
                                                            </div> 
                                                            <div className="col-sm-8 company-details-text">
                                                                <p>Vantage Circle is a simple AI-powered <a href="https://www.vantagecircle.com/employee-engagement-software/" style={{color: '#5b3b97'}} target="_blank">Rewards & Recognition Platform</a> for upgrading your employee experience and engagement for better productivity.</p>
                                                            </div> 
                                                        </div>
                                                                                                                                                
                                                    </div>      
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :
                            <article className="content content-inner">
                                <div className="row single-post post-full-content pstcontent">
                                    <div className="post-container">
                                        <div className="post_header_wrapper">
                                            <div className="post-meta">
                                                <nav className="breadcrumb">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="https://www.vantagecircle.com/" target="_blank">Home</a></li>

                                                        <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                                                        
                                                        {post.tags && post.tags[0].name !=='#Podcasts' && <li className="breadcrumb-item"><Link to={ tagurl }>{tagname}</Link></li>}
                                                        
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
                                                            <div className="readtime_wrapper">
                                                                <div className="readtime">{ readingTime }</div>
                                                            </div>
                                                            <div className="updated_date">
                                                                Last Updated on {post.updated_at_pretty}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="img-holder thumbnail col-sm-12 single-post-image passedFeatImage">
                                                        { post.feature_image ?
                                                        <figure className="post-feature-image text-center">
                                                            <img src={ post.feature_image } alt={ post.title } loading="lazy" width="800" height="449"/>
                                                        </figure> : null }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row single-post pstcontent">
                                    <div className="post-container">
                                        <div className="row editor-content">
                                            <div className="col-12 col-sm-12 col-md-2 col-lg-2 showHide">
                                                <ul className="share post-share">
                                                    <li>
                                                        <a rel="nofollow" href={'https://www.facebook.com/sharer/sharer.php?u='+ baseurl + pageContext.slug} className="facebook" target="_blank" title="Facebook" rel="noopener noreferrer">
                                                            <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" fill="#3b5998"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="nofollow" href={'https://linkedin.com/shareArticle?url='+ baseurl + pageContext.slug } className="linkedin" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                                            <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill="#0077B5"/>
                                                                <path d="m.396 7.977h4.976v16.023h-4.976z" fill="#0077B5"/>
                                                                <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill="#0077B5"/>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="nofollow" href={'https://twitter.com/share?url='+ baseurl + pageContext.slug + '&text=' + post.title} className="twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                                                            <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" fill="#1da1f2"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                        {/* <li>
                                                        <a rel="nofollow" href={'mailto:?subject=' + post.title} className="twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="22px" height="17px" viewBox="0 0 22 17" version="1.1">
                                                                <title>Group</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs>
                                                                    <rect id="path-1" x="0" y="0" width="22" height="17" rx="2.5"/>
                                                                </defs>
                                                                <g id="Proofs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <g id="Blog-Theme-2019_Post-Page_Desktop" transform="translate(-1832.000000, -1054.000000)">
                                                                        <g id="Newsletter-Signup" transform="translate(1816.000000, 1035.000000)">
                                                                            <g id="Group" transform="translate(16.000000, 19.000000)">
                                                                                <mask id="mask-2" fill="white">
                                                                                    <use xlink="#path-1"/>
                                                                                </mask>
                                                                                <rect stroke="#D6D9D0" stroke-width="2.3" x="1.15" y="1.15" width="19.7" height="14.7" rx="2.5"/>
                                                                                <path d="M22.9171655,0.15 L-0.917165521,0.15 L11,10.4782101 L22.9171655,0.15 Z" id="Rectangle" stroke="#D6D9D0" stroke-width="2.3" fill-rule="nonzero" mask="url(#mask-2)"/>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </li> */}
                                                    </ul>
                                                </div>
                                            
                                                <div className="col-sm-12 col-md-8 col-lg-8 post-center-col">
                                                    {/* The main post content */ }
                                                    <section
                                                        className="col-12 content-body load-external-scripts"
                                                        dangerouslySetInnerHTML={{ __html: newPosts }}
                                                    />
                                                    <div className="col-12 row content-body">
                                                        <div className="row company-details-wrapper">
                                                            <div className="col-sm-4 company-details-img">
                                                                <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1581416589/vantagecms/uploads/2020/02/vantage-circle-logo-1.png" alt="Vantage Circle logo" className="img-responsive" width="200" height="200" loading="lazy"/>
                                                            </div> 
                                                            <div className="col-sm-8 company-details-text">
                                                                <p>Vantage Circle is a simple AI-powered <a href="https://www.vantagecircle.com/employee-engagement-software/" style={{color: '#5b3b97'}} target="_blank">Rewards & Recognition Platform</a> for upgrading your employee experience and engagement for better productivity.</p>
                                                            </div> 
                                                        </div>                                                                                       
                                                    </div>                                                    
                                                </div>
                                           
                                                <div className="posrel col-sm-12 col-md-2 col-lg-2 pclr sidebar">
                                                    {/* <section className="col-12 pclr brdr-aside">
                                                    <div className="row">
                                                        <div className="subscribe_wrapper col-12 pclr">
                                                            <div className="subscribe_to_newsletter">
                                                                <h4 className="subs-text">Stay updated with Vantage Circle</h4>
                                                                
                                                                <HubspotForm
                                                                   portalId='6153052'
                                                                   formId='11096ea9-7d2d-4ea5-99ba-42d0b7e11f81'
                                                                   onSubmit={() => console.log('Submit!')}
                                                                   onReady={(form) => console.log('Form ready!')}
                                                                   loading={<div>Loading...</div>}
                                                                />
                                                                <p className="notetext">We safeguard your personal information in accordance with our <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section> */ }
                                                
                                                <section className="col-12 pclr brdr-aside" id="sticky-section">
                                                    
                                                    <div className="row">
                                                        <div className="col-12 pclr">
                                                            {(()=> {
                                                                if (ptag && ptag.name === 'Remote Working/Work-From-Home') {
                                                                    return <Cta3 />;
                                                                }else if (ptag && ptag.name === 'Employee Benefits') {
                                                                    return <Cta6 />;
                                                                }else if ((ptag.name === 'Employee Engagement') || (ptag.name === 'Company Culture')){
                                                                    return <Cta7 />;
                                                                } else if (ptag.name === 'Employee Survey'){
                                                                    return <Cta8 />;
                                                                } else if (ptag.name === 'Rewards and Recognition'){
                                                                    return <Cta9 />;
                                                                }else{
                                                                    if (post.slug === 'meaningful-work-anniversary-wishes') {
                                                                        return <Cta1 />;
                                                                    } else if (post.slug === 'employee-award-titles'){
                                                                        return <Cta2 />;
                                                                    } else if ((post.slug === 'work-from-home') || (post.slug === 'employees-engaged-work-from-home')){
                                                                        return <Cta3 />;
                                                                    } else if (post.slug === 'leadership-qualities'){
                                                                        return <Cta4 />;
                                                                    } else if (post.slug === 'prepare-organization-for-post-lockdown-period'){
                                                                        return <Cta5 />;
                                                                    } else {
                                                                        return <Cta10 />;
                                                                    }
                                                                } 
                                                            })()}
                                                           
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* tools section starts*/}
                                {(post.slug === 'leadership-styles') ? <Leadership /> : null}
                                {/* tools section ends*/}

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
                                </div> */}
                                </article>
                            }
                            <section className="container subsc_form_btm popup-new sidebar">
                                <div className="col-12">
                                    <div className="subscribe_bg text-center">
                                        <div className="col-12 subscribe_heading">Join our network of 1M+ HR Professionals</div>
                                        <div className="subscribe_wrapper">
                                        <LazyLoad offsetTop={500}>
                                            <HubspotForm
                                                    portalId='6153052'
                                                    formId='11096ea9-7d2d-4ea5-99ba-42d0b7e11f81'
                                                    onSubmit={() => console.log('Submit!')}
                                                    onReady={(form) => console.log('Form ready!')}
                                                    loading={<div>Loading...</div>}
                                                />
                                        </LazyLoad>
                                        </div>
                                        <div className="flw100 subscribe_des">Get <span className="text-orange"><b>Exclusive HR</b></span> content delivered right into your inbox!</div>
                                        <p className="flw100 notetext text-center">We safeguard your personal information in accordance with our <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </section>
                            <div className="related-posts container">
                                <div className="col-12 pclr item">
                                    <div className="row loop">
                                        <div className="col-12">
                                            <hr/>
                                            <h3>You might also like</h3>
                                        </div>
                                        {relatedposts.slice(1,4).map(({ node }) => (
                                            <RelatedPosts key={node.id} post={node}/>
                                        ))}
                                    </div>
                                </div>
                            </div>   
                            <div id="ouibounce-modal" className="exit-popup-B popup-new">
                                <div className="underlay"></div>
                                <div className="modal fade show" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="col-12 p0">
                                                    <div className="row">
                                                        <button type="button" className="close">
                                                            <span>
                                                                {geoLocation.country == "Australia" ? 
                                                                    <svg className="crossico" width="30" height="30" viewBox="0 0 17 17" style={{"fill": "#fff"}}>
                                                                        <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path> 
                                                                    </svg>
                                                                    : <svg className="crossico" width="30" height="30" viewBox="0 0 17 17"> 
                                                                        <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path> 
                                                                    </svg>
                                                                }
                                                            </span>
                                                        </button>
                                                        {(()=> {    
                                                            if(geoLocation.country == "Australia"){
                                                                return <Popup8/>;
                                                            }else{
                                                                return <InternalTagsPopup post={post}/>
                                                            }                  
                                                        })()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    query($slug: String!, $id: String!, $primary_tag: [String]!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
        allGhostPost(filter: {primary_tag: {name: {in: $primary_tag}}, id:{ne: $id} }, limit:4 ) {
            edges {
                node {
                  ...GhostPostFields
                }
            }
        }
    }
`
