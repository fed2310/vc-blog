import React, { useContext, useEffect } from 'react'

import { CurrValueContext } from '../../../../context/tools/roi/CurrentValueContext'
import { ModalContext } from '../../../../context/tools/roi/ModalContext'
import { employeeCostData } from '../../../../utils/tools/roi/index'
import {numberFormat, currencyFormat} from '../../../../utils/tools/roi/index'

import './result.css'
import { Card, CardBody, Button } from 'reactstrap'
import Arrow from '../../../../components/tools/roi/arrow'

//calculation functions
import {revenuePerEmployeeCal,
    costOfAbsentismCal,
    costOfAbsentismPerEmployeeCal,
    turnOverRateCal,
    numberOfEmployeeLeaveInAYearCal,
    avgCostToReplaceEmployeeCal,
    totalCostOfTurnOverCal,
    productivityGainsCal,
    savingFromLessAbsentismCal,
    savingFromLessTurnoverCal,
    totalBusinessValueCal,
    totalBusinessValuePerEmployeeCal,
    revenueWithEmployeeEngagementCal
} from '../../../../utils/tools/roi';

function Result() {
    const { 
        employeeVal,
        setEmployeeVal,
        salaryVal,
        setSalaryVal,
        revenueVal,
        setRevenueVal,
        employeesLeft,
        setEmployeesLeft,
        totalBusinessValue,
        setTotalBusinessValue,
        totalBusinessValuePerEmployee,
        setTotalBusinessValuePerEmployee,
        productivityGains, 
        setProductivityGains,
        savingFromLessAbsentism, 
        setSavingFromLessAbsentism,
        savingFromLessTurnover, 
        setSavingFromLessTurnOver,
    } = useContext(CurrValueContext)

    const {
        setShow,
    } = useContext(ModalContext)
    
    const handleShow = () => {
        setShow(true)
    }    

    useEffect(() => {
        setEmployeeVal(5000)
        setSalaryVal(50000)
        setRevenueVal(50000000)
        setEmployeesLeft(50)
    }, [])

    useEffect(()=>{
        revenuePerEmployeeCal(revenueVal, employeeVal)
        setProductivityGains(productivityGainsCal(employeeVal, revenueVal))
        costOfAbsentismCal(employeeVal)
        costOfAbsentismPerEmployeeCal(salaryVal)
        setSavingFromLessAbsentism(savingFromLessAbsentismCal())
        turnOverRateCal(employeesLeft, employeeVal)
        numberOfEmployeeLeaveInAYearCal(employeeVal)
        avgCostToReplaceEmployeeCal(salaryVal)
        totalCostOfTurnOverCal(employeesLeft)
        setSavingFromLessTurnOver(savingFromLessTurnoverCal())
        setTotalBusinessValue(totalBusinessValueCal(productivityGains,savingFromLessAbsentism, savingFromLessTurnover))
        setTotalBusinessValuePerEmployee(totalBusinessValuePerEmployeeCal(totalBusinessValue, employeeVal))
        revenueWithEmployeeEngagementCal(revenueVal, totalBusinessValue)
    })

    // useEffect(() => {
    //     revenuePerEmployeeCal(revenueVal, employeeVal)
    //     setProductivityGains(productivityGainsCal(employeeVal, revenueVal))
    //     costOfAbsentismCal(employeeVal)
    //     costOfAbsentismPerEmployeeCal(salaryVal)
    //     setSavingFromLessAbsentism(savingFromLessAbsentismCal())
    //     turnOverRateCal(employeesLeft, employeeVal)
    //     numberOfEmployeeLeaveInAYearCal(employeeVal)
    //     avgCostToReplaceEmployeeCal(salaryVal)
    //     totalCostOfTurnOverCal(employeesLeft)
    //     setSavingFromLessTurnOver(savingFromLessTurnoverCal())
    //     setTotalBusinessValue(totalBusinessValueCal(productivityGains,savingFromLessAbsentism, savingFromLessTurnover))
    //     setTotalBusinessValuePerEmployee(totalBusinessValuePerEmployeeCal(totalBusinessValue, employeeVal))
    //     revenueWithEmployeeEngagementCal(revenueVal, totalBusinessValue)
    // }, [revenueVal, employeeVal, salaryVal, employeesLeft, revenuePerEmployeeCal,
    //     costOfAbsentismCal,
    //     costOfAbsentismPerEmployeeCal,
    //     turnOverRateCal,
    //     numberOfEmployeeLeaveInAYearCal,
    //     avgCostToReplaceEmployeeCal,
    //     totalCostOfTurnOverCal,
    //     productivityGainsCal,
    //     savingFromLessAbsentismCal,
    //     savingFromLessTurnoverCal,
    //     totalBusinessValueCal,
    //     totalBusinessValuePerEmployeeCal])

    return (
        <div className="result-wrapper">
            <section className="top-section text-center">
                <div className="first-row row">
                    <div className="productivity-saving col-sm-12 col-md-4 pr-4">
                        <div className="productivity-saving icon">
                            {/* sprite icon applied */}
                        </div>
                        <div className="productivity-saving header">
                            <p className="result-heading-one"><span>Productivity Gains</span></p>
                        </div>
                        <div className="productivity-saving number">
                            <h6>{currencyFormat(productivityGains)}</h6>
                        </div>
                    </div>
                    <div className="absenteeism-saving col-sm-12 col-md-4 px-4">
                        <div className="absenteeism-saving icon">
                            {/* sprite icon applied */}
                        </div>
                        <div className="absenteeism-saving header">
                            <p><span>Absenteeism Savings</span></p>
                        </div>
                        <div className="absenteeism-saving number">
                            <h6>{currencyFormat(savingFromLessAbsentism)}</h6>
                        </div>
                    </div>
                    <div className="turnover-saving col-sm-12 col-md-4 pl-4">
                        <div className="turnover-saving icon">
                            {/* sprite styles */}
                        </div>
                        <div className="turnover-saving header">
                            <p><span>Turnover Savings</span></p>
                        </div>
                        <div className="turnover-saving number">
                            <h6>{currencyFormat(savingFromLessTurnover)}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mid-section">
                <div className="second-row row">
                    <div className="col-md-12 col-lg-7 col-sm-12">
                        <div className="piggy-image mx-auto">
                        </div>
                        <div className="second-row-texts text-md-left">
                            <div className="annual-saving-heading">
                                <h3> Total Annual savings with Employee Engagement</h3>
                            </div>
                            <div className="annual-saving-number">
                                <h1>{currencyFormat(totalBusinessValue)}</h1>
                            </div>
                            <div className="annual-saving-subheading">
                                <p>That you could save every year!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-sm-12">
                        <Card className="annual-revenue-card p-1">
                            <CardBody>
                                <div className="Card-body">
                                    <div className="card-title">
                                        <h5 className="text-center pt-3 additional-revenue-text"><span>Additional Revenue Per Employee</span></h5>
                                        <h1 className="text-center pt-3">{currencyFormat(totalBusinessValuePerEmployee)}</h1>
                                    </div>
                                    <div className="card-subtitle">
                                        <p className="text-center">You get an additional increase in revenue with employee engagement.</p>
                                    </div>
                                    <div className="card-button-wrapper">
                                        <Button onClick={handleShow} className="card-button" ><span>Download Report</span></Button>
                                        <span className="arrow"> <Arrow/> </span> 
                                        <p className="arrow-text">See exactly how this was calculated..!</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section> 
            <section>
                <div className="row">
                    <div className="here-save col-sm-12 pt-2">
                        <p>Here is what you can save with Employee Engagement!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Result
