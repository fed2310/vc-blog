import React from 'react'
import './index.css'
import { Table } from 'reactstrap';

import CardComponent from '../../../../components/tools/roi/card/index'

function Content() { 
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior:"smooth"})
    }

    return (
        <>
            <div className="content-wrapper container mx-auto">
                <h1>What is Employee Engagement?</h1>
                <p>
                    Employee engagement is an emotional connection which an employee feels towards their organization, that influences their level of 
                    effort in work-related activities. The main purpose of employee engagement is to create a work environment where employees love and
                    care about their work. 
                </p>
            </div>
            <div className="content-wrapper container mx-auto">
                <h1>Employee Engagement Program and the Savings You Make With It</h1>
                <p>
                    With the help of authentic engagement statistics, now you can determine the accurate revenue that the organizaqtion can generate. Now save money, engage your employees and follow 
                    success with a more robust approach.
                </p>
                <div onClick={scrollToTop}>
                    <p className="employee-engagement-highlight">
                        Calculate your Employee Engagement ROI 
                    </p>
                </div>
                <h1 className="pt-5">The calculations will be derived from</h1>
                <div className="row pb-5 pt-5">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="productivity-image"></div>
                        <p>Productivity Gains</p>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="absenteeism-image"></div>
                        <p>Absenteeism Savings</p>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="turnover-image"></div>
                        <p>Turnover Savings</p>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="annual-image"></div>
                        <p>Total Annual Savings</p>
                    </div>
                </div>
            </div>
            <div className="content-wrapper calculation-methodology container mx-auto">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1>Calculation Methodology</h1>
                        <p>With help of an Employee Engagement ROI calculator, an organization can accurately measure
                            the impact of an engaged workforce and determine the investment required in an employee engagement
                            program. The main goal of the methodology is to show the formulas used during the calculation and make it
                            understandable.
                        </p>
                        <h1>Industry Standard</h1>
                        <p>The report's calculations have been formulated by considering the benchmasrks setby Inc.com and Gallup.</p>
                        <Table bordered responsive className="roi-table">
                            <tbody>
                                <tr>
                                    <th scope="row">Higher Productivity</th>
                                    <td>Businesses with highly engaged teams experience a 21% increase in productivity. (Gallup)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Less Absenteeism</th>
                                    <td>Businesses saw a drop in absenteeism by 37% when teams are engaged in their work (Inc.com)</td>                         
                                </tr>
                                <tr>
                                    <th scope="row">Employee Turnover</th>
                                    <td>On a average, highly engaged teams will experience a 40% improvement in turnover(Gallup)</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h1>Productivity Gains</h1>
                        <Table bordered responsive className="roi-table">
                            <tbody>
                                <tr>
                                    <td>Total Number of employees X Revenue per employee with higher engagement - Annual company revenue = 
                                        <span className="font-weight-bold"> Total Productivity Gains</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p><span className="font-weight-bold">Number of Employees:</span> The total number of employees present in a company. </p>
                        <p><span className="font-weight-bold">Revenue per Rmployee:</span> This calculation includes the revenue of a company divided by the average number of employees present in a company. </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <p><span className="font-weight-bold ">Annual Company Revenue:</span> It is the total amount of money made by sales or services in a given year before costs or expenses are taken out.</p>
                        <h1>Absenteeism Savings</h1>
                        <Table bordered responsive className="roi-table">
                            <tbody>
                                <tr>
                                    <td>Total cost of absenteeism - Total cost of abseentism with higher engagement = 
                                        <span className="font-weight-bold"> Absenteeism Savings</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p><span className="font-weight-bold">Total cost of absenteeism:</span> This represents the cost of abseentism per employee mulyiplied by the average number of employes during a year. </p>
                        <h1>Turnover Savings</h1>
                        <Table bordered responsive className="roi-table">
                            <tbody>
                                <tr>
                                    <td>Total cost of employee turnover - Total cost of employee turnover with higher engagement = 
                                        <span className="font-weight-bold"> Turnover Savings</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p><span className="font-weight-bold">Employee Turnover Rate:</span> This represents the total number of employees that left a company during a particular year.
                            For the calculation, divide the number of employees that left during the year by the average number of employees during the year (i.e., employees at the beginning of the year plus employees at the year, divided by two).
                        </p>
                        <h1>Total Annual Savings</h1>
                        <Table bordered responsive className="roi-table">
                            <tbody>
                                <tr>
                                    <td>Productivity Gains + Absenteeism Savings + Turnover Savings = 
                                        <span className="font-weight-bold"> Total Annual Savings</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p className= "calculation-methodology-note">
                            <small> <span className="font-weight-bold"> Note: </span>
                                A company's Total Annual Savings will depen on underlying factors such as Total Productivity gains, Absenteeism Savings, and Turnover Savings.
                            </small>    
                        </p>
                    </div>
                </div>         
            </div>
            <div className="content-wrapper container mx-auto">
                <h1>5 Best Employee Engagement Ideas</h1>
                <p>Some ideas to drive your employee engagement efforts - </p>
                <div className="employee-engagement-ideas">
                    <div className="row">
                        <div className="employee-engagement-ideas-icon icon1 col-md-2 col-sm-12">
                        </div>
                        <p className="employee-engagement-ideas-text col-md-10 col-sm-12">Powerful Rewards and Recognition program.</p> 
                    </div>
                </div>
                <div className="employee-engagement-ideas">
                    <div className="row">
                        <div className="employee-engagement-ideas-icon icon2 col-md-2 col-sm-12">
                        </div>
                        <p className="employee-engagement-ideas-text col-md-10 col-sm-12">Timely and meaningful pulse survey.</p> 
                    </div>
                </div>
                <div className="employee-engagement-ideas">
                    <div className="row">
                        <div className="employee-engagement-ideas-icon icon3 col-md-2 col-sm-12">
          
                        </div>
                        <p className="employee-engagement-ideas-text col-md-10 col-sm-12">Psychological and Physical well-being.</p> 
                    </div>
                </div>
                <div className="employee-engagement-ideas">
                    <div className="row">
                        <div className="employee-engagement-ideas-icon icon4 col-md-2 col-sm-12">
        
                        </div>
                        <p className="employee-engagement-ideas-text col-md-10 col-sm-12">Robust internal communication.</p> 
                    </div>
                </div>
                <div className="employee-engagement-ideas">
                    <div className="row">
                        <div className="employee-engagement-ideas-icon icon5 col-md-2 col-sm-12">
    
                        </div>
                        <p className="employee-engagement-ideas-text col-md-10 col-sm-12">Providing work-life balance programs.</p> 
                    </div>
                </div>
            </div>
            <div className="row container">
                <div className="dash"></div>
            </div>
            <div className="row container mx-auto text-center">
                <h2 className="read-more-text mx-auto">Read more from our Success Stories</h2>
            </div>
            <div className="card-wrapper row container mx-auto  pb-5">
                <div className="col-md-12 col-lg-4 col-sm-12 pr-lg-5">
                    <CardComponent href={'https://www.vantagecircle.com/case-study/infosys/'} buttonText={"Read More"} title={"Vantage Circle Helped Infosys Boost Its Employee Experienc...."} image={"https://d204corxcgt3c0.cloudfront.net/wp-content/uploads/2021/03/Infosys-case-study-featured.png"}/>
                </div> 
                <div className="col-md-12 col-lg-4 col-sm-12 pr-lg-5">
                    <CardComponent href={'https://www.vantagecircle.com/case-study/infosys/'} buttonText={"Read More"} title={"India's largeast Telecom Company Boosts their Global...."} image={"https://d204corxcgt3c0.cloudfront.net/wp-content/uploads/2021/01/Telecom-Industry-case-study-vantage-circle.png"}/>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12 pr-lg-5">
                    <CardComponent href={'https://www.vantagecircle.com/case-study/infosys/'} buttonText={"Read More"} title={"iSchoolConnect Witnessed a Chain Reaction of Employee...."} image={"https://d204corxcgt3c0.cloudfront.net/wp-content/uploads/2020/12/ischoolconnect.png"}/>
                </div>
            </div>
        </>
    )
}

export default Content
