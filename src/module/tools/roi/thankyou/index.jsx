import React from 'react';
import { Card, CardImg, CardText, CardBody, } from 'reactstrap';
import './index.css'

import ModalWrapper from '../../../../components/tools/roi/modal/index'

function ThankYouModule() {
    return (
        <>
            <ModalWrapper>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row md-9">
                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1615446306/blog_images/roi/roi_mail.png" alt="roi-mail"/>
                        </div>
                        <div className="row md-3 pr-3">
                            <h2>Thank You! Your report will be with you shortly.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 right-col-wrapper">
                        <div className="row">
                            <img className="quote-img" src="https://res.cloudinary.com/vantagecircle/image/upload/v1615446306/blog_images/roi/quote.png" alt="quote"/>
                            <p className="testimonial-texts"> The Rewards and Recognition program we had before was very different from what Vantage Circle offers. After Vantage Circle, 
                            everything became a lot easier and structured. When we launched the program we saw an engagement of 40% which is quite good according to me.
                            Right now our plan is to improve our internal communication around it. The most popular feature here is the badges, people are really 
                            enjoying giving each other badges</p>
                        </div>
                        <div className="row mid-section ">
                            <img className="mx-auto shruti-img" src="https://res.cloudinary.com/vantagecircle/image/upload/w_45/uploads/2019/11/shruti.png" alt="Shruti-testimonial"/>
                        </div>
                        <div className="row">
                            <h5 className="mx-auto img-name">Shruti Bopaiah</h5>
                        </div>
                        <div className="row">
                            <p className="shruti-designation mx-auto">AVP & HEAD - INETRNAL COMMUNICATIONS, INFOSYS</p>
                        </div> 
                        <div className="thankyou row">
                            <div id="card" className="card-img  card-wrapper row">
                                <div className="col-sm-6">
                                    <CardImg src="https://res.cloudinary.com/vantagecircle/image/upload/h_200/v1615455533/blog_images/roi/Infosys-case-study-featured.png" alt="Card image cap" />
                                </div>
                                <div className="col-sm-6">
                                    <CardText className="card-text">
                                        Vantage Circle Helped Infosys Boost Its Employee Experience through its Reward Platform
                                        <br/> 
                                        <a href="https://www.vantagecircle.com/case-study/infosys/" target="_blank" rel="noreferrer" className="card-know-more"> Know More <span className="card-know-more-arrow">&#8594;</span></a>
                                    </CardText>  
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </ModalWrapper> 
        </>
    )
}

export default ThankYouModule
