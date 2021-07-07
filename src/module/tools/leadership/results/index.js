import React, {useContext, useState, useEffect, useRef} from 'react'
import Wheel from '../../../../components/tools/leadership/wheel/index'
import {AnswersContext} from '../../../../context/tools/leadership/AnswersContexts'
import {places, mapResult, resultQuotes, glowAnimate, smoothScrollToTop} from '../../../../utils/tools/leadership/index'
import LeadershipModals from '../modals/index'
// react hubspot
import HubspotForm from 'react-hubspot-form'
import ButtonComponent from '../../../../components/tools/roi/button/index'

import './index.css'
import { Label } from 'reactstrap' 

function Questions() {
    const { result, setResult, setAnswer, initialValues, setSelected1, 
    setSelected2, setSelected3, 
    setShow, setWheelDiv, topQuesDiv, resultIndex, 
    formId, setFormId, questionsCompleted, setQuestionsCompleted} = useContext(AnswersContext)

    const text = useRef()
    const wheelRef = useRef()

    useEffect(()=>{
        setWheelDiv(wheelRef)
    },[])

    // useEffect(() => {
    //     mapResult(answer, places, setResult, setResultIndex, setFormId)
    // },[answer])

    useEffect(() => {
        glowAnimate(text)
    },[result])

    const handleToolReset1 = (e) => {
        setAnswer({...initialValues})
        setSelected1('')
        setSelected2('')
        setSelected3('')
        setFormId('')
        setResult('')
        setQuestionsCompleted(0)
        // smoothScrollToTop(topQuesDiv.current, 1000)
    }

    const handleToolReset2 = (e) => {
        setSelected1('')
        setSelected2('')
        setSelected3('')
        setFormId('')
        setQuestionsCompleted(0)
    }

    const handleOnSubmit = () => {
        setShow(true)
    }

    return (
        <div ref={wheelRef} className="container leadership-result-wrapper">
            <div className="row">
                <h4 className="row pt-4 leadership-wheel-heading">Leadership Wheel</h4>
                <div className="wheel-wrapper mx-auto pb-4">
                    <Wheel items={places} resultIndex={resultIndex}/>
                </div>
            </div>

            <div className="row mt-3">
                {result !== "" && <p className="mx-auto" onClick={handleToolReset1}><ButtonComponent name={"Try Again"}/></p>}
            </div>

            {result !== "" &&  <div className="row">
                <h4 ref={text} className="leadership-result-text mx-auto">{resultQuotes(result)}</h4>
            </div>}

            {result !== "" && <div className="row mt-2 leadership-form-wrapper">
                {result !== "" && <div className="row mb-3">
                    <h4 className="leadership-details-text">Know why you are Crowd's Favourite ! </h4>
                </div>}

                <div className="leadership-form mt-2 mx-auto">
                    {formId !== "" && <HubspotForm
                        portalId='6153052'
                        formId= {formId}
                        onFormSubmitted={()=>handleToolReset2()}
                        onSubmit={() => handleOnSubmit()}
                        onReady={()=>{
                            const script = document.createElement('script');
                            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
                            let jqueryScript = document.getElementsByTagName('script');
                            let src = Array.from(jqueryScript).filter(item => item.src === script.src)
                            if(src.length === 0) {
                                document.body.appendChild(script)
                            }}}
                        loading={<div>Loading ...</div>}
                    />}
                    <div className="row">
                        {result !== "" && <p className="modal-policy mt-2 text-white">By sharing your email, you agree to our <a className="text-white" href="https://www.vantagecircle.com/privacy-policy/" target="_blank">Privacy Policy</a> and <a className="text-white" href="https://www.vantagecircle.com/terms-conditions/" target="_blank">Terms Of Use.</a> </p>}
                    </div>
                </div>
                {result == "Transactional"  && <LeadershipModals leadershipStyle="Transactional" image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Transactional-Leadership.png" />}
                {result == 'Democratic'  && <LeadershipModals leadershipStyle="Democratic"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Democratic-Leadership.png"/>}
                {result == 'Transformational'  && <LeadershipModals leadershipStyle="Transformational"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Transformational-Leadership.png"/>}
                {result == 'Laissez-faire'  && <LeadershipModals leadershipStyle="Laissez-faire" image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Laissez-Faire-_Delegative_-Leadership.png" />}
                {result == 'Coaching'  && <LeadershipModals leadershipStyle="Coaching"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Coaching-Leadership.png"/>}
                {result == 'Charismatic '  && <LeadershipModals leadershipStyle="Charismatic"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Charismatic-Leadership.png"/>}
                {result == 'Servant'  && <LeadershipModals leadershipStyle="Servant"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Servant-Leadership.png"/>}
                {result == 'Bureaucratic'  && <LeadershipModals leadershipStyle="Bureaucratic"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Bureaucratic-Leadership.png"/>}
                {result == 'Autocratic' && <LeadershipModals leadershipStyle="Autocratic"  image="https://res.cloudinary.com/vantagecircle/image/upload/v1619409882/blog_images/leadership/Autocratic-Leadership.png"/>}
            </div>}
        </div>
     
    )
}

export default Questions
