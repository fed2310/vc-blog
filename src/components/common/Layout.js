import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Footer } from '.'
import {Popup3} from '../common'
import CustomModal from '../common/CustomModal'
// import config from '../../utils/siteConfig'
import { Collapse, Navbar, NavbarToggler, NavbarBrand,} from 'reactstrap';
import Lazyload from 'react-lazy-load'

// Styles
import '../../styles/bootstrap.min.css'
import '../../styles/style.css'
import '../../styles/custom-styles.css'
import '../../styles/custom-styles1.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/

require('typeface-pt-sans')

const DefaultLayout = ({ data, children, bodyClass, isHome, location }) => {
    const site = data.allGhostSettings.edges[0].node
    const [collapsed, setCollapsed] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    
    const toggleNavbar = () => setCollapsed(!collapsed);
    // const toggleModal = () => setModalOpen(!modalOpen);

    const modalRender = () => {
        return (
            <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                <Popup3/>
            </CustomModal>
        )
    }
    
    // const handleDownloadNow = () => {
    //     toggleModal()           
    // }

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                
                <script type="text/javascript" id="hs-script-loader" defer src="//js.hs-scripts.com/6153052.js"></script>
                
                <meta name="msvalidate.01" content="436C2B8534AA6297C17CF34C540BF1CF" />
                
                <body className={bodyClass} />
            </Helmet>

            <div className="body_wrapper viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <div className={`hellobar-wrapper`}>
                        <div className="hellobar-background-image"></div>
                        <div className="hellobar-text">[ <b style={{color:"#FF9040", letterSpacing:"1px"}}>WEBINAR ALERT</b> : 12 July 2021] Is HR preparing for what life will be like after Covid-19?</div>
                        <a className="hellobar-btn" href="https://www.vantagecircle.com/webinar-registration/" target="_blank" rel="noopener noreferrer"><span id="hellobar-cta-vcblog"  className="hellobar-cta cta-wiggle">View More Details</span></a>
                        <div className="hellobar-closebtn">+</div>
                    </div>
                    <header>
                        <div className="container custom_container">
                            <div className="row">
                                <nav className="navbar navbar-expand-lg menu_center w100">
                                    <div className="col-3 ml-auto">
                                        <div className="blog-logo">
                                            <a className="" href="https://www.vantagecircle.com/" rel="noopener noreferrer"> 
                                                <img loading="lazy" width="250" height="36" src="https://res.cloudinary.com/vantagecircle/image/upload/v1581416589/vantagecms/uploads/2020/02/vantage-circle-logo-1.png" alt={site.title} title={site.title}/>
                                                <span className="logo-label">BLOG</span>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div className="col-9">
                                        <div className="inner">
                                            <div className="navigation">
                                                <ul id="menu-main-menu-global" className="navbar-nav menu mr-auto ml-auto">
                                                    <li id="menu-item-28" className="menu-item nav-item">
                                                        <a href="https://www.vantagecircle.com/" className="nav-link" rel="noopener noreferrer">Home </a>
                                                    </li>
                                                    <li id="menu-item-18" className="menu-item nav-item dropdown submenu">
                                                                <a href="https://www.vantagecircle.com/solutions/" className="nav-link">Solutions</a>
                                                                <ul className="dropdown-menu mega_menu_three">
                                                                    <li className="nav-item">
                                                                    <ul className="dropdown-menu">
                                                                        <li className="nav-item">
                                                                        <a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link">
                                                                            <span className="navdropdown_link">
                                                                            <span className="navdropdown_icon all-images menuicon1"></span>
                                                                            <span className="navdropdown_content">
                                                                                <h5>  Vantage Rewards  </h5>
                                                                                <p> Employee Rewards and Recognition </p>
                                                                            </span>
                                                                            </span>
                                                                        </a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                        <a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link">
                                                                            <span className="navdropdown_link">
                                                                            <span className="navdropdown_icon all-images menuicon2"></span>
                                                                            <span className="navdropdown_content">
                                                                                <h5>  Vantage Perks  </h5>
                                                                                <p> Employee Discount and Benefits </p>
                                                                            </span>
                                                                            </span>
                                                                        </a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                        <a href="https://www.vantagefit.io/" target="_blank" className="nav-link" rel="noopener noreferrer">
                                                                            <span className="navdropdown_link">
                                                                            <span className="navdropdown_icon all-images menuicon3"></span>
                                                                            <span className="navdropdown_content">
                                                                                <h5>  Vantage Fit  </h5>
                                                                                <p> Employee Health and Wellness </p>
                                                                            </span>
                                                                            </span>
                                                                        </a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                        <a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link">
                                                                            <span className="navdropdown_link">
                                                                            <span className="navdropdown_icon all-images menuicon4"></span>
                                                                            <span className="navdropdown_content">
                                                                                <h5>  Vantage Pulse  </h5>
                                                                                <p> Employee Survey and Feedback </p>
                                                                            </span>
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-489" className="menu-item nav-item">
                                                        <a href="https://www.vantagecircle.com/pricing/" className="nav-link">Pricing </a>
                                                    </li>
                                                    <li id="menu-item-489" className="menu-item nav-item">
                                                        <a href="https://www.vantagecircle.com/corporates/" className="nav-link">Partners </a>
                                                    </li>
                                                    <li id="menu-item-582" className="menu-item nav-item dropdown submenu">
                                                       <a href="https://www.vantagecircle.com/resources/" className="nav-link">Resources</a>
                                                       <ul className="dropdown-menu mega_menu_three">
                                                          <li className="nav-item">
                                                             <ul className="dropdown-menu">
                                                              <li className="nav-item">
                                                                 <Link to="/" className="nav-link">
                                                                     <span className="navdropdown_link">
                                                                        <span className="navdropdown_icon all-images menuicon5"></span>
                                                                        <span className="navdropdown_content">
                                                                            <h5>  Blog  </h5>
                                                                            <p> Insightful articles, best practices and trends in HR innovation </p>
                                                                        </span>
                                                                     </span>
                                                                  </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                   <a href="https://www.vantagecircle.com/resources/" className="nav-link">
                                                                      <span className="navdropdown_link">
                                                                         <span className="navdropdown_icon all-images menuicon6"></span>
                                                                         <span className="navdropdown_content">
                                                                            <h5>  Guides and eBooks  </h5>
                                                                            <p> A free resource center with practical guides on HR management </p>
                                                                         </span>
                                                                      </span>
                                                                   </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                   <Link to="/podcasts/" className="nav-link">
                                                                      <span className="navdropdown_link">
                                                                         <span className="navdropdown_icon all-images menuicon7"></span>
                                                                         <span className="navdropdown_content">
                                                                            <h5>  Vantage Influencers Podcasts  </h5>
                                                                            <p> Listen to thought leaders on best HR practices and trends </p>
                                                                         </span>
                                                                      </span>
                                                                   </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                   <a href="https://www.vantagecircle.com/webinars/" className="nav-link">
                                                                      <span className="navdropdown_link">
                                                                         <span className="navdropdown_icon all-images menuicon8"></span>
                                                                         <span className="navdropdown_content">
                                                                            <h5>  Vantage Doers Webinar  </h5>
                                                                            <p>  Changing things together </p>
                                                                         </span>
                                                                      </span>
                                                                   </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                   <a href="https://www.vantagecircle.com/case-study/" className="nav-link">
                                                                      <span className="navdropdown_link">
                                                                         <span className="navdropdown_icon all-images menuicon9"></span>
                                                                         <span className="navdropdown_content">
                                                                            <h5> Case Studies </h5>
                                                                            <p>  Read our client success stories </p>
                                                                         </span>
                                                                      </span>
                                                                   </a>
                                                                </li>
                                                             </ul>
                                                          </li>
                                                       </ul>
                                                    </li>
                                                    
                                                    <li id="menu-item-475" className="menu-item nav-item">
                                                       <a href="https://www.vantagecircle.com/contact-us/" className="nav-link gtm-nav-contactUs">Contact Us </a>
                                                    </li>
                                                 </ul>
                                              </div>
                                             
                                              <div className="navbar-nav right-btns">
                                                 <a id="searchcall" href="#" data-toggle="modal" data-target="#search" className="search-trigger">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                                                        <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#fff">
                                                        </path>
                                                    </svg>
                                                 </a>
                                                <a id="nav-reqdemo" className="menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/request-demo/?vc_page_source=home&amp;vc_button_name=menu_bottom_cta">Schedule a Free Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                                <Navbar className="navbar-light mobile_navbar">
                                    <NavbarBrand href="/" className="mr-auto">
                                        <img loading="lazy" width="220" height="32" src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/02/vantage-circle-logo-1.png" alt={site.title} />
                                        <span className="logo-label">BLOG</span>
                                    </NavbarBrand>
                                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                                    <Collapse isOpen={!collapsed} navbar>
                                        <div className="nav-home menu-item nav-item" role="menuitem">
                                        <ul className="mobileheader_menu">
                                            <li><a aria-current="page" className="site-nav-item active" href="https://www.vantagecircle.com/">Home</a></li>
                                            <li className="mobile_listing ">Solutions
                                             <ul className="dropdownmenu">
                                                <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/solutions/rewards-recognition/">Vantage Rewards</a></li>
                                                    <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/solutions/employee-discount/">Vantage Perks</a></li>
                                                     <li><a aria-current="page" className="site-nav-item " href="https://www.vantagefit.io/" target="_blank" rel="noopener noreferrer">Vantage Fit</a></li>
                                                     <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/solutions/employee-survey/">Vantage Pulse</a></li>
                                              </ul>
                                            </li>
                                            <li><a className="site-nav-item" href="https://www.vantagecircle.com/pricing/">Pricing</a></li>
                                            <li  className="mobile_listing">Resources
                                              <ul className="dropdownmenu">
                                                <li><a aria-current="page" className="site-nav-item " href="https://blog.vantagecircle.com/">Blog</a></li>
                                                <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/resources/">Guides and eBooks</a></li>
                                                <li><Link aria-current="page" className="site-nav-item " to="/podcasts/">Vantage Influencers Podcasts</Link></li>
                                                <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/webinars/">Vantage Doers Webinar</a></li>
                                                <li><a aria-current="page" className="site-nav-item " href="https://www.vantagecircle.com/case-study/">Case Studies</a></li>
                                              </ul>
                                            </li>
                                            <li><a className="site-nav-item" href="https://www.vantagecircle.com/contact-us/">Contact Us</a></li>
                                            <li><a className="menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/request-demo/?vc_page_source=home&amp;vc_button_name=menu_bottom_cta">Request Demo </a></li>
                                              </ul>
                                        </div>
                                    </Collapse>
                                </Navbar>
                            </div>
                        </div>
                    </header>
                    {isHome ? 
                    <main className="main-container" role="main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        <div id="content" className="">
                            {children}      
                        </div>
                    </main> :
                    <main className="main-container" role="main">  
                        <div className="blog-content-container container-top">
                            {children}
                        </div>
                    </main>
                    }
                    {modalRender()}
                    <div className="modal fade" id="search" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <a id="search_close" data-dismiss="modal" className="close btn search_close">
                                        <span><svg className="crossico" width="20" height="20" viewBox="0 0 17 17"> <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path> </svg></span>
                                    </a>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <form className="search">
                                                    <input id="search-field" placeholder="Search" />
                                                </form>
                                                <div id="results" className="loop"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Lazyload offset={400}>
                    <Footer />
                </Lazyload>

            </div>
            {/* <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" data-account="109090" data-user="97716" async></script> */}

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
