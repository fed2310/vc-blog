import React, { useState } from 'react'
import { Link } from 'gatsby'
import LazyLoad from 'react-lazy-load'

const Footer = () => {
    return  (
        <>
        {/* <LazyLoad offsetTop={400}> */}
            <div className="viewport-bottom" id="footer">
                {/* The footer at the very bottom of the screen */}
                <footer className="new_footer_area bg_color">
                    <div className="new_footer_top">
                        <div className="container custom_container pclr">
                            <div className="row">
                                <div className="widget footer-widget col-lg-8 col-md-12 widget_nav_menu col-sm-12 pclr">
                                    <div className="col-12 pclr">
                                        <div className="row"> 
                                            <div className="widget footer-widget col-lg-4 col-md-12 widget_nav_menu col-sm-12">
                                                <div className="f_widget about-widget pl_70">
                                                    <h3 className="widget_title f-title t_color f_size_18 mb_40">Company</h3>
                                                    <div className="menu-footer-3-company-container">
                                                        <ul id="menu-footer-3-company" className="menu">
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/about-us/" className="nav-link">About us </a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/careers/" className="nav-link">Careers - <span style={{color:"#df8421"}}><b>We're hiring!</b></span> </a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/advertisers/" className="nav-link">Advertise with us </a></li>
                                                            <li className="menu-item"><Link to="/become-a-contributor/" className="nav-link">Become a Contributor </Link></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/contact-us/" className="nav-link">Contact us </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget footer-widget col-lg-4 col-md-12 widget_nav_menu col-sm-12">
                                                <div className="f_widget about-widget pl_70">
                                                    <h3 className="widget_title f-title t_color f_size_18 mb_40">Solutions</h3>
                                                    <div className="menu-footer-3-company-container">
                                                        <ul id="menu-footer-3-company" className="menu">
                                                           
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link">Employee Recognition</a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link">Employee Discount </a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link">Employee Survey </a></li>
                                                            <li className="menu-item"><a href="https://www.vantagefit.io/" className="nav-link">Employee Wellness</a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/employee-engagement-platform/" className="nav-link">Employee Engagement</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget footer-widget col-lg-4 col-md-12 widget_nav_menu col-sm-12">
                                                <div className="f_widget about-widget">
                                                    <h3 className="widget_title f-title t_color f_size_18 mb_40">Resources Center</h3>
                                                    <div className="menu-footer-2-solutions-container">
                                                        <ul id="menu-footer-3-company" className="menu">
                                                            <li id="menu-item-587" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-587"><a href="https://www.vantagecircle.com/resources/" className="nav-link">Resources </a></li>
                                                            <li className="menu-item"><a href="https://blog.vantagecircle.com/" className="nav-link">Blog </a></li>
                                                            <li className="menu-item"><Link to="/podcasts/" className="nav-link">Vantage Podcasts </Link></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/case-study/" className="nav-link">Case Studies</a></li>
                                                            <li className="menu-item"><a href="https://www.vantagecircle.com/in-the-press/" className="nav-link">In the Press </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mobilefooterlogodisplay1">
                                        <div className="row d-flex">
                                            <div className="widget_text f_widget about-widget left-footer-col col-12 pclr">
                                                <div className="textwidget custom-html-widget">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="logo-text col-12 col-sm-7 pclr">
                                                            <div className="footerlogo"> 
                                                                <img loading="lazy" width="280" height="43" src="https://res.cloudinary.com/vantagecircle/image/upload/w_280/v1608528238/blog_images/images/vantagecircle-white-300.png" alt="Vantage Circle" />
                                                            </div>
                                                            <p> Collaborate with us to provide your employees<br/> an engaging and rewarding experience.</p>
                                                            <div className="social-icons d-flex">
                                                                <div className="icons"> 
                                                                    <a href="https://www.facebook.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" fill="#bcbcc7"></path>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://twitter.com/VantageCircle/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" fill="#bcbcc7"></path>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://www.linkedin.com/company/vantage-circle/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill="#bcbcc7"/>
                                                                            <path d="m.396 7.977h4.976v16.023h-4.976z" fill="#bcbcc7"/>
                                                                            <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill="#bcbcc7"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m23.469 5.929.03.196c-.29-1.029-1.073-1.823-2.068-2.112l-.021-.005c-1.871-.508-9.4-.508-9.4-.508s-7.51-.01-9.4.508c-1.014.294-1.798 1.088-2.083 2.096l-.005.021c-.699 3.651-.704 8.038.031 11.947l-.031-.198c.29 1.029 1.073 1.823 2.068 2.112l.021.005c1.869.509 9.4.509 9.4.509s7.509 0 9.4-.509c1.015-.294 1.799-1.088 2.084-2.096l.005-.021c.318-1.698.5-3.652.5-5.648 0-.073 0-.147-.001-.221.001-.068.001-.149.001-.23 0-1.997-.182-3.951-.531-5.846zm-13.861 9.722v-7.293l6.266 3.652z" fill="#bcbcc7"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://www.pinterest.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z" fill="#bcbcc7"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://www.instagram.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                        <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" fill="#bcbcc7"/>
                                                                            <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"fill="#bcbcc7"/>
                                                                            <circle cx="18.406" cy="5.595" r="1.439" fill="#bcbcc7"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-5">
                                                            <div className="app-downld-text">Download app:</div>
                                                            <div className="app-icons social-icons d-flex justify-content-around">
                                                                <div className="icons"> 
                                                                    <a href="https://play.google.com/store/apps/details?id=com.bargaintechnologies.vantagecircle&hl=en" target="_blank" rel="noopener noreferrer">
                                                                        <div className="download-app-icon-wrapper d-flex align-items-center">
                                                                            <div>
                                                                                <svg id="Capa_1" enableBackground="new 0 0 512.029 512.029" height="20" viewBox="0 0 512.029 512.029" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M111.758,8.189C91.726-2.883,68.206-2.627,48.302,8.349l233.28,215.2l78.368-78.368L111.758,8.189z" fill="#bcbcc7"/>
                                                                                    </g>
                                                                                    <g>
                                                                                        <path d="M24.974,30.365c-5.696,9.312-8.96,19.968-8.96,31.264v388.672c0,10.944,2.976,21.376,8.352,30.496l234.592-234.592
                                                                                            L24.974,30.365z" fill="#bcbcc7"/>
                                                                                    </g>
                                                                                    <g>
                                                                                        <path d="M463.854,202.525l-74.752-41.248l-84,83.968l102.944,94.944l55.84-30.816c20.096-11.136,32.128-31.104,32.128-53.44
                                                                                            C495.982,233.597,483.982,213.629,463.854,202.525z" fill="#bcbcc7"/>
                                                                                    </g>
                                                                                    <g>
                                                                                        <path d="M282.478,267.901L47.246,503.133c10.208,5.824,21.408,8.896,32.672,8.896c10.88,0,21.824-2.752,31.84-8.288
                                                                                            l266.784-147.232L282.478,267.901z" fill="#bcbcc7"/>
                                                                                    </g>
                                                                                </svg>
                                                                            </div>
                                                                            <div className="download-app-text">
                                                                                <div className="text1">FREE DOWNLOAD</div>
                                                                                <div className="text2">Google Play</div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="icons"> 
                                                                    <a href="https://apps.apple.com/in/app/vantage-circle/id869311123?ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer">
                                                                        <div className="download-app-icon-wrapper d-flex align-items-center">
                                                                            <div>
                                                                                <svg id="Capa_1" enableBackground="new 0 0 512.029 512.029" height="20" viewBox="0 0 512.029 512.029" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734   c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z" fill="#bcbcc7"/>
                                                                                        <path d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z" fill="#bcbcc7"/>
                                                                                    </g>
                                                                                </svg>
                                                                            </div>
                                                                            <div className="download-app-text">
                                                                                <div className="text1">FREE DOWNLOAD</div>
                                                                                <div className="text2">App Store</div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loc-address widget footer-widget col-lg-4 col-md-12 widget_nav_menu col-sm-12">
                                    <div className="f_widget about-widget ">
                                        <h3 className="widget_title f-title t_color f_size_18 mb_40">Locations</h3>
                                        <div className="menu-footer-4-links-container">
                                            <div className=" flagC"><div><span className="all-images flag1 texasmap"></span> <span>Texas</span>, USA</div>
                                            <div className="addressmap">3200 Dallas Parkway, Hall Office Park,<br/> Suite 200 Frisco, Texas 75034<br/>
                                                <strong>Tel:</strong> <a className="companycolor" href="tel:469 4300525">(469) 430-0525</a> | <strong>Fax:</strong> (469) 458-6827</div>
                                            </div>
                                            <div className=" flagC"><div><span className="all-images flag2 ausmap"></span> <span>New South Wales</span>, AUS</div><div className="addressmap">Suite 1A Level 2, 802-808 Pacific Highway,<br/> Gordon NSW – 2072<br/>
                                                <strong>Tel:</strong> <a href="tel:61405807126" className="companycolor">+61-405807126</a></div>
                                            </div>
                                            <div className="flagC"><div><span className="all-images flag3 indiamap"></span> <span>New Delhi</span>, India</div>
                                            <div className="addressmap">C1-1151, Vasant Kunj,<br/>
                                            New Delhi – 110070</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mobilefooterlogodisplay2">
                                    <div className="row d-flex">
                                        <div className="widget_text f_widget about-widget left-footer-col col-12 pclr">
                                            <div className="textwidget custom-html-widget">
                                                <div className="row">
                                                    <div className="logo-text col-12 col-sm-7">
                                                        <div className="footerlogo"> 
                                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_280/v1608528238/blog_images/images/vantagecircle-white-300.png" alt="Vantage Circle" />
                                                        </div>
                                                        <p> Collaborate with us to provide your employees<br/> an engaging and rewarding experience.</p>
                                                    </div>
                                                    <div className="social-icons col-12 d-flex justify-content-around">
                                                        <div className="social-icons d-flex">
                                                            <div className="icons"> 
                                                                <a href="https://www.facebook.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" fill="#bcbcc7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://www.twitter.com/VantageCircle/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" fill="#bcbcc7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://www.linkedin.com/company/vantage-circle/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill="#bcbcc7"/>
                                                                        <path d="m.396 7.977h4.976v16.023h-4.976z" fill="#bcbcc7"/>
                                                                        <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill="#bcbcc7"/>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m23.469 5.929.03.196c-.29-1.029-1.073-1.823-2.068-2.112l-.021-.005c-1.871-.508-9.4-.508-9.4-.508s-7.51-.01-9.4.508c-1.014.294-1.798 1.088-2.083 2.096l-.005.021c-.699 3.651-.704 8.038.031 11.947l-.031-.198c.29 1.029 1.073 1.823 2.068 2.112l.021.005c1.869.509 9.4.509 9.4.509s7.509 0 9.4-.509c1.015-.294 1.799-1.088 2.084-2.096l.005-.021c.318-1.698.5-3.652.5-5.648 0-.073 0-.147-.001-.221.001-.068.001-.149.001-.23 0-1.997-.182-3.951-.531-5.846zm-13.861 9.722v-7.293l6.266 3.652z" fill="#bcbcc7"/>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://www.pinterest.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z" fill="#bcbcc7"/>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://www.instagram.com/vantagecircle/" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" fill="#bcbcc7"/>
                                                                        <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"fill="#bcbcc7"/>
                                                                        <circle cx="18.406" cy="5.595" r="1.439" fill="#bcbcc7"/>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="app-icons social-icons col-12 d-flex justify-content-around">
                                                            <div className="app-downld-text">Download app:</div>
                                                            <div className="icons"> 
                                                                <a href="https://play.google.com/store/apps/details?id=com.bargaintechnologies.vantagecircle&hl=en" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Capa_1" enableBackground="new 0 0 512.029 512.029" height="20" viewBox="0 0 512.029 512.029" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path d="M111.758,8.189C91.726-2.883,68.206-2.627,48.302,8.349l233.28,215.2l78.368-78.368L111.758,8.189z" fill="#bcbcc7"/>
                                                                        </g>
                                                                        <g>
                                                                            <path d="M24.974,30.365c-5.696,9.312-8.96,19.968-8.96,31.264v388.672c0,10.944,2.976,21.376,8.352,30.496l234.592-234.592
                                                                                L24.974,30.365z" fill="#bcbcc7"/>
                                                                        </g>
                                                                        <g>
                                                                            <path d="M463.854,202.525l-74.752-41.248l-84,83.968l102.944,94.944l55.84-30.816c20.096-11.136,32.128-31.104,32.128-53.44
                                                                                C495.982,233.597,483.982,213.629,463.854,202.525z" fill="#bcbcc7"/>
                                                                        </g>
                                                                        <g>
                                                                            <path d="M282.478,267.901L47.246,503.133c10.208,5.824,21.408,8.896,32.672,8.896c10.88,0,21.824-2.752,31.84-8.288
                                                                                l266.784-147.232L282.478,267.901z" fill="#bcbcc7"/>
                                                                        </g>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="icons"> 
                                                                <a href="https://apps.apple.com/in/app/vantage-circle/id869311123?ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer">
                                                                    <svg id="Capa_1" enableBackground="new 0 0 512.029 512.029" height="20" viewBox="0 0 512.029 512.029" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734   c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z" fill="#bcbcc7"/>
                                                                            <path d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z" fill="#bcbcc7"/>
                                                                        </g>
                                                                    </svg>
                                                                </a>
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
                    <div className="footer_bottom">
                        <div className="container custom_container">
                            <div className="col-12 align-items-center pclr">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-7 col-md-6 pclr"><p>© Vantage Circle. {new Date().getFullYear()} All rights reserved.</p></div>
                                    <div className="col-lg-6 col-sm-5 text-right col-md-6">
                                        <p><a href="https://www.vantagecircle.com/terms-conditions/" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>&nbsp; |&nbsp; <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        {/* </LazyLoad> */}
        </>
    );
}

export default Footer;