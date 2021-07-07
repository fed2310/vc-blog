import React, { useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap'

import { ModalContext } from '../../../../context/tools/roi/ModalContext'
import { CurrValueContext } from '../../../../context/tools/roi/CurrentValueContext'
import './index.css'
import ButtonComponent from '../../../../components/tools/roi/button/'
import ModalWrapper from '../../../../components/tools/roi/modal/index'
import ThankYouModule from '../thankyou/index'

import {validateEmail} from '../../.././../utils/tools/roi/index'

function ModalPopUp() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [error, setError] = useState('')

    const {
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName, 
        setLastName,
        show,
    } = useContext(ModalContext)

    const {
        employeeVal,
        salaryVal,
        revenueVal,
        employeesLeft,
        totalBusinessValue,
        productivityGains, 
        savingFromLessAbsentism, 
        savingFromLessTurnover, 
    } = useContext(CurrValueContext)

    useEffect(() => {
        setEmail(''),
        setFirstName(''),
        setLastName(''),
        setError(''),
        setFormSubmitted(false)
    },[show])
  
    const makeRequest = (scalaData, hubspotData) => {
        let hubspotApi = "https://api.hsforms.com/submissions/v3/integration/submit/6153052/cc2d95a0-dce3-4979-a496-46a3846fa2e0";
        let scalaApi = "/api/v1/general/send/roi/email";

        const requestOne = axios.post(hubspotApi, hubspotData, {
            headers: {
                'Access-Control-Allow-Origin': `*`
            },
        })

        const requestTwo = axios.post(scalaApi, scalaData, {
            headers: {
                'Access-Control-Allow-Origin': `*`
            },
        });

        axios.all([requestTwo, requestOne])
            .then(setFormSubmitted(true))
            .catch((error) => {
                console.log(error)
            })

        // axios({
        //     method: 'post',
        //     url: scalaApi,
        //     data: scalaData,
        //   })
        //     .then(function (response) {
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       console.log(response);
        // });

        // axios({
        //     method: 'post',
        //     url: hubspotApi,
        //     data: hubspotData,
        //   })
        //     .then(function (response) {
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       console.log(response);
        // });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        const scalaData = {
            employeeNo: parseInt(employeeVal),
            salary: parseInt(salaryVal),
            revenue: parseInt(revenueVal),
            employeeLeft: parseInt(employeesLeft),
            productivityGain: parseInt(productivityGains), 
            absentismSaving: parseInt(savingFromLessAbsentism), 
            turnoverSaving: parseInt(savingFromLessTurnover), 
            annualSaving: parseInt(totalBusinessValue),
            email: email,
            name: firstName,
        }

        const hubspotData = {
            "fields" : [
                {
                    "name": "email",
                    "value": `${email}`
                }, 
                {
                    "name": "firstname",
                    "value": `${firstName}`
                }     
            ],
            // "context": {
            //     // "hutk": ":hutk", 
            //     "pageUri": "/roi-calculator",
            //     "pageName": "ROI Calculator"
            // },
        }

        if (validateEmail(email) === false){
            setError('')
            makeRequest(scalaData, hubspotData)
        }
        else if (validateEmail(email) === true){
            setError('Please check if you have entered a valid company email address.')
        }
    }

    return (
        <>
            {formSubmitted ? <ThankYouModule/> : (<ModalWrapper>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h1 className="modal-heading">Take the first step towards Employee Engagement Success</h1>
                        </div>
                        <div className="row">
                            <p className="modal-text">Get access to your personalised ROI report</p>
                        </div>
                        <div className="form-fields row pl-3">
                            <form onSubmit={onSubmitHandler}>
                                <input
                                    type="firstName"
                                    value={firstName}
                                    placeholder="Enter your first name"
                                    onChange={e => setFirstName(e.target.value)}
                                    required={true}
                                />
                                <input
                                    type="lastName"
                                    value={lastName}
                                    placeholder="Enter your last name"
                                    onChange={e => setLastName(e.target.value)}
                                    required={true}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your work email address"
                                    onChange={e => setEmail(e.target.value)}
                                    required={true}
                                />
                                {error ? <Alert color="danger" className="invalid-email-alert">  {error} </Alert> : null}
                                <div className="row">
                                    <p className="modal-note">Note: The ROI report will be sent to the email address shared by you.</p>
                                </div>
                                <div className="row">
                                    <p> <ButtonComponent type="submit" name={"Get the ROI Report"}/> </p>
                                </div> 
                            </form>
                        </div>
                        <div className="row">
                            <p className=" modal-policy">By sharing your email, you agree to our <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank">Privacy Policy</a> and <a href="https://www.vantagecircle.com/terms-conditions/" target="_blank">Terms Of Use.</a> </p>
                        </div> 
                    </div> 
                    <div className="col-md-6">
                        <div className="modal-pig-img">
                            <ul className="img-piggy-ul">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </ModalWrapper>)}
        </>
    
)}

export default ModalPopUp
