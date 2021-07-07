import React from 'react'
import PropTypes from 'prop-types'


const Cta7 = ({ cta }) => {

    return (
    	<>
        <div className="downloadsection">
        
			<div className="content-title-1">Boost employee engagement with this FREE guide!</div>
	         	<p>Download this ultimate guide to learn the secret to a happy workplace. 
	        </p>
	        <div>
	            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2021/05/Decoding-HRKatha.png" alt="A Complete Guide to Employee Engagement" className="img-responsive" />
	        </div>
	        <div className="transform">
	            <a className="download_cta_banner_popup menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-decoding-and-driving-employee-engagement/?utm_source=blog&utm_medium=rhs" target="_blank">
	               <span>Download Now</span>
	            </a>
	        </div>
	    </div> 
	    </>        
    );
}

export default Cta7
