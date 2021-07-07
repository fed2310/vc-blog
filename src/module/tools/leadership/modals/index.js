import React from 'react'
import './index.css'

import ModalWrapper from '../../../../components/tools/leadership/modal/index'

function LeadershipModals({leadershipStyle, image, text}) {
    return (
        <>
            <ModalWrapper>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 leader-ship-modal-wrapper">
                        <div className="leadership-image mx-auto" style={{'backgroundImage': `url(${image})`}}>
                        </div>
                        <div className="leadership-subheading row">
                            <span className="mx-auto mt-5">YOUR LEADERSHIP STYLE</span>
                        </div>
                        <div className="leadership-heading row">
                            <span className="mx-auto mt-1">{leadershipStyle}</span>
                        </div>
                        <div className="leadership-report-sent row">
                            <span className="leadership-report-sent-text pt-5">A detailed report of your Leadership Style has been sent to your registered mail ID </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 leadership-claim-wrapper">
                        <div className="leadership-claim-image mx-auto pb-5">
                        </div>
                        <div className="leadership-report-claim-your-copy-text pt-5 mx-auto">
                            <p><span className="leadership-report-claim-your-copy-text-head mx-auto">Claim your Free Copy</span><br/> of our Exclusive Ebook on Leadership Qualities and drive effective teamwork within the organization.</p>
                        </div>
                        <div className="leadership-report-button-wrapper row">
                            <a className="leadership-report-button mx-auto mb-5" href="https://www.vantagecircle.com/resources/leadership-qualities-that-makes-you-great-leader/" target="_blank">
                                <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1620110413/blog_images/leadership/download-img2.png" alt="Download Now" style={{height: "20px", paddingRight:"9px"}}/>
                                <span className="mx-auto leadership-report-button-span">Download now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default LeadershipModals
