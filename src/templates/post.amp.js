import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MetaData } from '../components/common/meta'
import _ from 'lodash';
import {filterLazyLoading} from '../utils/helpers'

// import HubspotForm from 'react-hubspot-form'

const Post = (postData) => {
    const { data, location } = postData
    const post = data.ghostPost
    const newPosts = filterLazyLoading(post)
    // console.log(newPosts)
    const isamp = true
    
    return (
        <>
            <MetaData
                data={data}
                location={location}
                amp={postData.pageContext.amp}
                type="article"
                isamp = {isamp}
            />
            {!postData.pageContext.amp && 
            <Helmet>              
                <style amp-custom>{`
                body{color:#2c2d4f;font-family:'PT Sans',sans-serif;counter-reset:quotes-counter;font-size:15px;line-height:1.8}.amp-img-container{position:relative;height:248px;margin:5vmin 0;float:left;width:100%}amp-img{height:100%;width:100%;max-width:100%;max-height:100%}amp-img img{-o-object-fit:contain;object-fit:contain}p{margin-bottom:0}.content{max-width:680px;margin:0 auto;}header.content{text-align:center}a{color:#5b3b97}h1,h2,h3,h4,h5,h6{margin:0;font-weight:700}h1{letter-spacing:.3px;font-size:1.8rem;line-height: 1.4;}h2{font-size:1.6rem;line-height:1.2em}h3{font-size:1.4rem;line-height:1.1em}h4{font-size:1.2rem;line-height:1em}.post-header{text-align:center; margin-top: -40px;}.content-title{margin-bottom:.5em margin-top:-65px;}.author-detail a,.author-detail p,.post-full-content li,p{font-size:1rem}.content-body>*+*{margin-top:1.5em;margin-bottom:15px}.content-body ul{padding-left:15px}.post-full-published-date{margin:1rem 0 0 0;text-transform:uppercase;color:#738a94;font-weight:500;font-size:.9rem}blockquote{box-shadow:none;border-radius:0;margin:50px 0 0;padding:20px 40px 20px 35px;background-color:rgb(241 81 98 / .05)}blockquote p{font-size:1rem;margin-top:0;margin-bottom:0}.post-full-content ul li{list-style:none;}.post-full-content li{position:relative;padding:0;margin-bottom:15px;margin-left:10px}.post-full-content ol{padding-left:10px;}.post-full-content ul li::before{content:"";display:block;width:6px;height:6px;background:#5b3b97;position:absolute;top:.8333333333335em;left:-15px;margin-top:-2px;border-radius:50%}.page-footer{padding:40px 5vmin 40px;margin:32px auto 40px;text-align:center;background-color:#f8f8f8;}.page-footer h3{line-height:1.3;margin-bottom:20px}.page-footer p{margin:0.5rem 1rem 0.5rem;line-height:1.5em;color:rgba(0,0,0,.6)}.page-footer p a{font-weight:500}.cta-banner img{width:100%}.main-container-pdn1{margin-top:0}.author-detail amp-img{width:75px;margin-right:15px}.author-detail .single-author-wrapper{display:flex}.author-detail p{line-height:1.6;}.author-detail{border-top:1px solid #ccc;}.content_c {position: relative;padding: 40px;float: left;width: 100%;margin: 40px 0;font-size: 15px;overflow: hidden;border-radius: 15px;background-color: #f4f7ff;}.content_c .table_heading {text-align: left;color: #5b3b97;font-size: 18px;line-height: 20px;letter-spacing: 2px;margin-bottom: 10px;text-transform: uppercase;font-weight: 700;}.content_c ol {margin-left: 0;padding-left: 0;counter-reset: item;list-style: none;}.content_c ol li:before{counter-increment: item;content: counter(item)". ";margin-right: 10px;font-weight: 700;}.editor-content .content_c ol li {padding-left: 0;color: #5b3b97;font-weight: 400;}.content_c ol li ol {margin-top: 5px;}.content_c ol li li {padding-left: 30px;}.content_c ol li{margin-bottom:5px;color: #5b3b97;}.content_c ol li li:before {content: counters(item,".") " ";}.hrmstitle_wrapper{float:left;width:100%;margin-top:40px;margin-bottom:10px}.hrmstitle_wrapper h2{margin-top:0;margin-bottom:0;margin-right:10px}.hrmstitle_wrapper .col-8{display:flex;align-items:center}.hrmstitle_wrapper img{max-width:70px;margin-right:10px;float:left;margin-top:2px}.hrmstitle_wrapper .fluidbox__ghost{position:relative;float:left;width:0}.hrmstitle_wrapper .content-inner .editor-content ol{padding-left:1em}.hrmstitle_wrapper .learnmore-btn{padding-right:0;margin:23px auto 10px}.hrmstitle_wrapper .download_cta_banner_popup.ghost-btn{border:1px solid #2c2d4f;background-color:transparent;color:#2c2d4f;float:right;transition:all .3s ease}.hrmstitle_wrapper .download_cta_banner_popup.ghost-btn:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.Stars{--percent:calc(var(--rating) / 5 * 100%);display:inline-block;font-size:var(--star-size);font-family:Times;line-height:1}.Stars::before{content:'★★★★★';letter-spacing:3px;background:linear-gradient(90deg,var(--star-background) var(--percent),var(--star-color) var(--percent));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.starrate{font-size:13px}.starrate span{font-size:15px;font-weight:500}.star-rating-table{width:auto;margin:0 auto 20px}.star-rating-table thead>tr{background-color:#f6f9fb}.star-rating-table thead>tr>th{border-bottom:0;text-transform:uppercase;vertical-align:middle;font-weight:700;font-size:16px;padding:10px 20px;color:#2c2d4f}.star-rating-table tbody>tr>td{vertical-align:middle;font-size:16px}.star-rating-table.no-stars tbody>tr>td{font-weight:300;color:#2c2d4f}.table-bordered td,.table-bordered th{border:1px solid #e7ebef}.special-blocks{padding:1rem 1rem 1rem 2rem;margin:1.5rem .75rem;position:relative;background-color:#f8f9fa;width:100%}.special-blocks p,blockquote p{margin-bottom:0}.special-blocks:before,blockquote:before{width:1.875rem;height:1.875rem;left:-.825rem;top:1.25rem;border-radius:100%;content:'';position:absolute}.special-blocks:after,blockquote:after{content:'';position:absolute;background-image:url(https://res.cloudinary.com/vantagecircle/image/upload/v1598953025/blog_images/sprite-blog-new.png);background-repeat:no-repeat;margin-right:15px;background-size:auto;display:inline-block;left:-1rem;top:15px;border-radius:0}.special-blocks p:before{display:inline;font-weight:700}.block-tip:after{width:40px;height:42px;background-position:0 -340px}.block-tip:before{background-color:#e5fff8}.block-tip p:before{content:'Tip: '}.block-note:after{width:40px;height:42px;background-position:0 -695px}.block-note:before{background-color:#ebe6f4}.block-note p:before{content:'Note: '}.block-important:after{width:40px;height:42px;background-position:0 -746px}.block-important:before{background-color:#e0f4ff}.block-important p:before{content:'Important: '}.block-warning:after{width:40px;height:42px;background-position:0 -201px}.block-warning:before{background-color:#fad2ca}.block-warning p:before{content:'Warning: '}.block-questions:after{width:45px;height:42px;background-position:0 -290px}.block-questions:before{background-color:#ffe7cd}.block-questions p:before{content:'Have any questions? '}.special-blocks.block-questions{background-color:#fff;border:2px solid #f6f6f6}blockquote{padding:1.5rem 1.5rem 1.5rem 2.5rem;margin:1.5rem .75rem;position:relative;background-color:#f8f9fa;margin-inline-start:0;display:flex}blockquote span{display:block;margin-top:10px;font-weight:400}.editor-content blockquote p{line-height:1.6;font-size:18px;font-weight:500}blockquote:before{background-color:#ebe6f4;z-index:2}blockquote:after{width:45px;height:42px;background-position:0 -381px;z-index:3}blockquote.block-multiquote{background-color:#fff;border:2px solid #f6f6f6}.block-multiquote:before{width:2rem;height:2rem;left:-.9rem;top:1.2rem}.block-multiquote:after{counter-increment:quotes-counter;content:counter(quotes-counter,decimal-leading-zero);left:-9px;top:22px;font-weight:700;opacity:1;font-size:18px;background-image:none}.result_box{background:#f5f5fa;margin-top:-3px;line-height:1.4;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;width:85%;text-align:center;color:#212529;float:left;margin-right:5px}.attrition-rate-calc{border:2px solid rgb(91 59 151 / 30%);max-width:550px;margin:50px auto;padding-bottom:30px;position:relative;padding-top:30px;border-radius:6px}.attrition-rate-calc .form-control{text-align:center;border-radius:0;margin-bottom:0;border:2px solid rgb(91 59 151 / 30%);transition:all .3s ease}.attrition-rate-calc .form-control:focus{background:#f5f5fa;box-shadow:0 0 0 .2rem rgb(91 59 150 / 15%)}.attrition-rate-calc .control-label{margin-bottom:0}.attrition-rate-calc .control-label,.form-group.d-flex{color:#212529}.form-group.d-flex{margin-bottom:10px}.pc_sym{margin-top:4px;float:left}.result-title{width:110px;height:28px;background-color:#5b3b97;margin-top:40px;float:left;color:#fff;padding-left:31px;line-height:1.8;font-size:17px;font-weight:400;border-radius:4px 4px 0 0}.result-title-hr{border-bottom:2px solid #5b3b97;float:left;width:100%;margin-bottom:20px}.calc-box-title{margin-top:-60px;background:#fff;width:max-content;padding:5px 10px;margin-bottom:25px;position:absolute;left:4%}.calc-box-title h3{margin:0}
                .categories_filtertags{display:none}.all .hrmstitle_wrapper{float:none}.all h4{margin-top:20px}.all .hrmstitle_wrapper .learnmore-btn{margin-top:0px}.all .hrmstitle_wrapper .download_cta_banner_popup.ghost-btn{padding:3px;text-decoration:none} .homepage-ebook-section1 {padding: 30px; border-radius: 20px; }
                .homepage-ebook-section1.ctaamp{height:auto; background-color: #F4F7FF;  position: relative; }.homepage-ebook-section1.ctaamp h3{ margin: 0 0 30px;font-size: 2em;line-height: 1.4;}.ctalabel{color:#fff;margin-top: 20px;}.text-center{text-align:center;}.learnmore-btn {margin: 0 auto 10px;width: 100%;float: left;}.learnmore-btn a {text-decoration: none!important;width: 180px;padding: 10px 20px;background-color: #fff;-webkit-appearance: none;border: 0;font-size: 17px;color: #5b3b97;border-radius: 3px;margin: 0 auto;text-align: center;display: block;font-weight: 700;}
                .amp-form-input-field{text-align: center;} .amp-form-input-field input { height: 45px; width: 200px; border-radius: 5px; margin: 50px auto 10px; text-align: center; border-color: #593997;} 
                .amp-form-download-now-button{ text-decoration: none!important; width: 210px; padding: 10px 20px; background-color:#5b3b97; -webkit-appearance: none; border: 0; font-size: 17px; color: #fff; border-radius: 3px; margin: 0 auto; text-align: center; display: block; font-weight: 700; }
                .download-error-message{width: fit-content; margin: 0 auto; margin-top: 10px;text-align: center!important; background-color: #f4f7ff; font-weight: 400; padding: 10px; color: red; width:}
                .download-success-message{color: white; font-weight: 400; text-align: center;}
                .hide{display:none;}
                .fullwidthbanners {padding: 40px 20px;}.fullwidthbanners.text-center ul li{text-align:left}.fullwidthbanners p{color:#ffffff}.fullwidthTOC amp-img{ width:200px!important; margin:auto}.fullwidthTOC{float:none}
                .fullwidthbanners a{color:#ffffff}.post-full-content .fullwidthbanners ul li::before{color:#ffffff}.fullwidthTOC{max-width:88%;margin:40px auto;text-align:center!important}.fullwidthbanners.text-center.firstFullBanner h1, .fullwidthbanners.text-center.firstFullBanner hr{display:none}.fullwidthbanners{clear:both}
                .fullwidthTOC.content_c .table_heading{text-align:center!important}
                #amp-script-sticky{position: fixed; z-index: 1000; width: 100%;}
                .sticky-header-wrapper{position: relative; display: flex; flex-wrap: wrap; justify-content: center; background-color: white; z-index:100; padding: 0 5px 15px; box-shadow: 0 4px 6px 0 rgb(12 0 46 / 6%); }
                .sticky-form-wrapper{display: flex; }
                .sticky-header-text p {font-size: 16px}
                .sticky-header-button{ border: 1px solid #5a3a97; color: #fff; background: #5a3a97; height: 40px; margin-top: 10px; border-radius: 4px; margin-right: 13px; padding: 5px 16px;}
                .sticky-input-field{margin-right: 5px; margin-left: 5px; margin-top: 10px;}
                .sticky-input-field input {background: #f4f5f7; border: 1px solid #f5f6f7; font-weight: 500; height: 36px; padding-right: 10px; width: 200px; padding-left: 6px; font-size:12px; opacity: 0.7; }  .sticky-input-field input[type=text]:focus{outline: 1px solid #5a3a97;}
                .sticky-header-script{background-color: white; }
                .download-error-message-header {font-size: 12px; color:red; position:absolute; top:55%; left: 45%;}
                .download-success-message-header{font-size: 14px; padding: 4px}
                .sticky-header-policy{position: absolute; top: 49%; font-size: 8px; left: 26%;}
                .content{padding: 50px 5px 5px 5px;}
                .sticky-footer{width: 100%; position: fixed; bottom: 0; background-color: #5A3A97; box-shadow: 0 0 40px rgb(0 0 0 / 12%); padding: 10px 0; font-size: 16px; color: white;} .sticky-footer-btn{text-align: center; padding: 1px; font-size: 14px; } #sticky-footer-click-me{text-decoration: none; font-size:17px; color: #FC7E14;} .sticky-footer-up-arrow {border: solid #FC7E14; border-width: 0 3px 3px 0; display: inline-block; padding: 3px;  transform: rotate(-135deg); -webkit-transform: rotate(-135deg);}
                .sticky-header-shadow{box-shadow: 0 4px 6px 0 rgb(12 0 46 / 6%);} 
                .amp-form-botton-background-plectrum-image{  background: url(https://res.cloudinary.com/vantagecircle/image/upload/v1622026191/blog_images/images/Plectrum-mono.png)center no-repeat; height: 250px; background-size: 300px; position:relative;}
                .amp-form-botton-free-ebook-image{  background: url(https://res.cloudinary.com/vantagecircle/image/upload/w_230/vantagecms/uploads/2021/05/rr-mockup-new1.png)center no-repeat; position: absolute; height: 255px; background-size: 155px; width:100%;}
                .amp-form-botton-free-ebook-symbol{  background: url(https://res.cloudinary.com/vantagecircle/image/upload/w_110/vantagecms/uploads/2021/05/pop-up-free-badge.png)center no-repeat; position: absolute; height: 80px; background-size: 80px; width: 80px; left: 57%; top: 1%;}
                .amp-form-botton-dotted-circle1-image{  background: url(https://res.cloudinary.com/vantagecircle/image/upload/v1622026190/blog_images/images/Dotted-circle-purple-cutout.png) center no-repeat; width: 37px; height: 100px; position: absolute; left: 0%;}
                .amp-form-botton-dotted-circle2-image{  background: url(https://res.cloudinary.com/vantagecircle/image/upload/v1622026190/blog_images/images/Dotted-circle-purple-cutout.png) center no-repeat; width: 35px; height: 100px; position: absolute; top: 9%; right: 0%; transform: rotateY(-180deg);}
                .amp-form-botton-text{text-align: center; }
                .amp-footer-subtitle-wrapper{display: flex; justify-content: center; margin: 2rem 1rem; font-size: 1rem;} .amp-footer-divider{ border-right: 1px solid #593997;} .amp-footer-explore-products{margin: 2px; font-size: 1.3rem;}. .amp-footer-subtitle-wrapper p {font-size: 1rem} .amp-footer-vc-title{font-size: 1.2rem}
                .sticky-header-wrapper-2 {margin-top: -14px; position: fixed; display: flex; flex-wrap: wrap; justify-content: center; z-index: 100; color: white; align-items: center; text-align: center; background-color: #593997; padding: 0px 0px 8px; box-shadow: 0 4px 6px 0 rgb(12 0 46 / 6%); width: 100%;} .sticky-header-button-2 {border: 1px solid #FF9040;color: #fff;background: #FF9040;height: 40px;margin-top: 10px;border-radius: 4px;margin-right: 13px;padding: 5px 16px;text-decoration: none; } .sticky-header-text-2{display: contents} .sticky-input-field-2{ padding: 10px; padding-top: 26px;} .sticky-button-wrapper-2 { margin-top: 13px;}
                @media only screen and (max-width: 600px) {
                    .download-error-message-header {
                        left: 7%; top: 72%;
                    }
                    .sticky-input-field{
                        margin-top: 5px;
                    }
                    .sticky-input-field-2 {
                        margin-top: -7px;
                        padding: 0px;
                        padding-top: 3px;
                    }
                    .sticky-header-button{
                        margin-top: 5px;
                    }
                    .sticky-button-wrapper-2{
                        margin-top: 4px;
                    }
                }
                `}</style>
            </Helmet> }
            {/* <amp-script layout="fixed-height" height="108" src="https://blog.vantagecircle.com/AmpScripts2.js">
                <div className="sticky-header-wrapper row" id="amp-script-sticky">
                    <div className="sticky-header-text">
                        <p>Join <b> 1M+ HR </b> Professionals</p>
                    </div>
                    <div className="sticky-form-wrapper">
                        <div className="sticky-input-field">
                            <input type="email" id="amp-header-email" name="email" placeholder="Drop Email for Exclusive HR content!" required />
                        </div>
                        <div className="sticky-button-wrapper">
                            <button className="sticky-header-button" id="header-button">Subscribe Now</button>
                        </div>
                        <span className="sticky-form-title hide">{post.title}</span>
                    </div>
                </div>
            </amp-script> */}
            <div class="sticky-header-wrapper-2 row">
                <span className="sticky-header-text-2">
                    <p>[<b style={{color:"#FF9040", letterSpacing:"1px"}}>WEBINAR ALERT</b> : 12 July 2021]</p>
                    <div className="sticky-input-field-2">
                        Is HR preparing for what life will be like after Covid-19?
                    </div>
                </span>
                <div class="sticky-form-wrapper">
                    <div className="sticky-button-wrapper-2">
                        <a className="sticky-header-button-2" href="https://www.vantagecircle.com/webinar-registration/" target="_blank" >View More Details</a>
                    </div>
                </div> 
            </div>
            <main className="content" role="main">
                <div className="container">
                    <header className="text-center content">
                        <a href="https://www.vantagecircle.com" className="navbar-brand sticky_logo">
                            <amp-img width="220" height="45" alt="Vantage Circle" class="stick_logo" src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/08/vantage-circle-logo-compressed.png" />
                        </a>
                    </header>
                    <article className="content">
                        <div className="post-header">
                            <h1 className="content-title">{ post.title }</h1>
                            <div className="post-full-published-date">
                                { post.created_at_pretty }
                            </div>
                        </div>
                        { post.feature_image && location ?
                            <figure className="amp-img-container featured-image">
                                <amp-img width="680" height="248" src={ post.feature_image } class="contain" layout="responsive" alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            {/* The main post content */ }
                            {/* <amp-script src="https://blog.vantagecircle.com/AmpScripts3.js"> */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: newPosts }}
                            />  
                            {/* </amp-script> */}
                            
                        </section>
                        <br/>
                        <div class="row">
                            <div class="col-12 homepage-ebook-section1 ctaamp">
                                <div class="amp-form-botton-text">
                                    <h3>The Ultimate Guide to <br /> Employee Rewards <br /> and Recognition</h3>
                                </div>
                                <div class="amp-form-botton-background-plectrum-image">
                                    <div class="amp-form-botton-free-ebook-image">
                                        <div class="amp-form-botton-free-ebook-symbol"> 
                                        </div>
                                    </div>
                                </div>
                                <div class="amp-form-botton-dotted-circle1-image"></div>
                                <div class="amp-form-botton-dotted-circle2-image"></div>
                                <amp-script src="https://blog.vantagecircle.com/AmpScripts.js">
                                    <div class="amp-form-input-field">
                                        <input type="email" id="amp-form-email" name="email" placeholder="Enter your Work Email Id" required />
                                    </div>
                                    <div class="amp-form-button-wrapper">
                                        <button className="amp-form-download-now-button" id="button">Download Now</button>
                                    </div>
                                    <span className="sticky-form-title hide">{post.title}</span>
                                </amp-script>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            <footer className="page-footer">
                <Link to="/" className="site-icon">
                    <amp-img width="300" height="50" alt="Vantage Circle" class="stick_logo" src="https://www.vantagecircle.com/wp-content/uploads/2020/02/vantage-circle-logo-1.png" />
                </Link>
                <p class="amp-footer-vc-title">Vantage Circle is a simple AI-powered<br/><a>Rewards and Recognition Platform <br/> </a>for todays workforce</p>
                <div class="amp-footer-subtitle-wrapper">
                    <p class="amp-footer-subtitle">Automated Rewarding </p><span class="amp-footer-divider"></span>
                    <p class="amp-footer-subtitle">Peer-to-peer Appreciation</p><span class="amp-footer-divider"></span>
                    <p class="amp-footer-subtitle">Global Coverage</p>     
                </div>  
                <p>
                    <a class="amp-footer-explore-products" target= "_blank" href="https://www.vantagecircle.com/employee-engagement-software/">
                       Explore our products
                    </a>
                </p>
            </footer>  
            <div className="sticky-footer">
                <div class="sticky-footer-btn">
                    Increase Employee Engagement to 2X, <a class="download_cta_banner_popup" href="https://www.vantagecircle.com/request-demo/?hsCtaTracking=b1be8568-7b55-47f9-a342-97e3557c02a1%7C84f9b139-c4db-4a24-a798-6ca514c69ce7" target="_blank" id="sticky-footer-click-me">Click Here <i className="sticky-footer-up-arrow"></i></a>
                </div>
            </div>                           
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
    amp: PropTypes.bool,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`