import React from 'react'

function Popup8({popup}) {
    return (
        <>  
            <div className="popup8-main-content row">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12>">
                        <h1 className="popup8-heading">Alec Bashinky's Insights On <br/> "A Future-Proof Workplace"</h1>
                    </div>
                </div>
                <div className="row popup8-bullet-heading-wrapper">
                    <div className="col-sm-12 col-md-6 col-lg-6>">
                        <h4 className="popup8-bullet-heading pt-5">Learn about----</h4>
                        <ul className="popup8-bullets">
                            <li className="pb-3">Importance of workplace leadership</li>
                            <li className="pb-3">Leveraging digital communication</li>
                            <li>2021 HR predictions</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <div className="popup8-circle-img float-right">
                            <img loading="lazy" className="img-responsive popup8-img" src="https://res.cloudinary.com/vantagecircle/image/upload/v1619517265/blog_images/popup/alec-bashinsky.png" alt="A Complete Guide to Decoding and Driving Employee Engagement" />
                            <div className="popup8-background-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row popup8-footer-wrapper">
                <div className="popup8-footer col-sm-12 col-md-8 col-lg-8>">
                    <div className="popup-8-footer-text text-right">
                        <h5>APAC Partner at Josg Bersin Academy, Australia.<br/> Future of Work Specialist, HR Transformer</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4>">
                    <div className="popup-8-button">
                        <a className="popup-8-pdf-button" href="https://www.vantagecircle.com/resources/insights-on-future-proof-workplace/?utm_source=blog&utm_medium=exitpopup&utm_campaign=australia_campaign" target="_blank">
                            <span>Get your Free PDF</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Popup8
