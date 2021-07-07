import React from 'react'
import HubspotForm from 'react-hubspot-form'
import LazyLoad from 'react-lazy-load'

const Popup1 = ({ popup }) => {

    return (
    	<>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="content-title-1">
                        Work-From-Home:<br/> A Definitive Guide For Managers
                    </div>
                    <div className="content-desc-1">
                        Download this step-by-step guide to improve working-from-home practices for their employees.
                    </div>
                    <div className="content-desc-2">
                    <p><b style={{color: "#ff9041"}}>5K+ Downloads</b> by HR professionals across the globe!</p>                        
    
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                        <LazyLoad>
                            <HubspotForm
                                portalId='6153052'
                                formId='d371a027-c481-4a5b-942c-d6ee9412bb37'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />
                        </LazyLoad>
                            {/* <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-rewards-recognition/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    {/* <img loading="lazy" className="flowershapes" src="https://res.cloudinary.com/vantagecircle/image/upload/w_150/vantagecms/uploads/2021/05/pop-up-corner-plants.png" alt="Free-ebook-badge" /> */}
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
            <div className="dark-shape"></div>
                <div className="image_wrapper-1">
                    <img width="240" height="240" loading="lazy"  className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/w_230/vantagecms/uploads/2021/05/WFH.png" alt="Work-From-Home:A Definitive Guide For Managers" />
                    <img width="90" height="90"   loading="lazy" className="freebadge" src="https://res.cloudinary.com/vantagecircle/image/upload/w_110/vantagecms/uploads/2021/05/pop-up-free-badge.png" alt="Free-ebook-badge" />
                </div>
            </div>

            
		</>         
    );
}

export default Popup1
