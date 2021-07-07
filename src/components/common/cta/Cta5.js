import React from 'react'
import PropTypes from 'prop-types'


const Cta5 = ({ cta }) => {

    return (
    	<>
        <div className="downloadsection">
	        <h4>The Post Lockdown Guide for Managers</h4>
	        <p>See how to ensure a safe, practical, and effective organizational reopening after the lockdown period ends.</p>
	        <div className="wfh-img-std">
	            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2021/05/Post-lockdown.png" alt="Post-Lockdown-Guide for Managers Ebook" className="img-responsive" />
	        </div>
	        <div className="transform">
	            <a className="download_cta_banner_popup menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/post-lockdown-guide-for-managers/?utm_source=blog&utm_medium=rhs" target="_blank">
	               <span>Download Now</span>
	            </a>
	        </div>
	    </div> 
	    </>         
    );
}

export default Cta5
