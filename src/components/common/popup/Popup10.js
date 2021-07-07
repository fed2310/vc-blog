import React from 'react'
import HubspotForm from 'react-hubspot-form'
import LazyLoad from 'react-lazy-load'

const Popup10 = ({ popup }) => {

    return (
    	<>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="content-title-1">
                        360 Degree Appraisal - <br/> A Brief Guide for HRs
                    </div>
                    <div className="content-desc-1">
                        Check out how you can deliver a holistic appraisal to your employees and support them at work for better engagement.
                    </div>
                    <div className="content-desc-2">
                    <p><b style={{color: "#ff9041"}}>5K+ Downloads</b> by HR professionals across the globe!</p>                        
    
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                        <LazyLoad>
                             <HubspotForm
                                portalId='6153052'
                                formId='d68f23f2-453f-45f1-b336-73184dc6a1b9'
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
                    <img width="240" height="240" loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/w_230,h_324,c_scale/v1623239211/gatsbycms/uploads/2021/06/360-Appraisal-mockup.png" alt="Work-From-Home:A Definitive Guide For Managers" />
                    <img width="90" height="90"  loading="lazy" className="freebadge" src="https://res.cloudinary.com/vantagecircle/image/upload/w_110/vantagecms/uploads/2021/05/pop-up-free-badge.png" alt="Free-ebook-badge" />
                </div>
            </div>
         
		</>         
    );
}

export default Popup10
