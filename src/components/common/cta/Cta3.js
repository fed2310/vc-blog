import React from 'react'
import PropTypes from 'prop-types'


const Cta3 = ({ cta }) => {

    return (
    	<>
        <div className="downloadsection">
	        <h4>Work-From-Home:<br/>A Definitive Guide For Managers</h4>
	        <p>This is a step-by-step guide for managers to improve WFH practices for their employees.</p>
	        <div className="wfh-img-std">
	            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2021/05/WFH.png" alt="Work From Home Ebook" className="img-responsive" />
	        </div>
	        <div className="transform">
	            <a className="download_cta_banner_popup menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-work-from-home-a-definitive-guide-for-managers/?utm_source=blog&utm_medium=rhs" target="_blank">
	               <span>Download Now</span>
	            </a>
	        </div>
	    </div> 
	    </>        
    );
}

export default Cta3
