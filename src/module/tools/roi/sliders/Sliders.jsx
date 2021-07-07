import React, {useContext} from 'react';

//components
import RangeSlider from '../../../../components/tools/roi/range-slider/Index';
//context
import {CurrValueContext} from '../../../../context/tools/roi/CurrentValueContext';

function Sliders() {
    const {
        setEmployeeVal,
        employeeVal,
        salaryVal,
        setSalaryVal,
        revenueVal,
        setRevenueVal,
        employeesLeft,
        setEmployeesLeft,
    } = useContext(CurrValueContext);

    return (
        <div className="px-2">
            <div>
                <div className= "col-md-12 col-sm-12" >
                    <RangeSlider className="first-child" heading={"Number of employees in your organization"} placeholder={"5"} min={5} max={10000} title={"Employee"} setValue={setEmployeeVal} value={employeeVal} roundedTop={true}/>
                </div>
            </div>  
            <div>
                <div className="col-md-12 col-sm-12">
                    <RangeSlider heading={"Average employee salary in your organization ($)"} min={1000} max={100000} title={"Salary"} setValue={setSalaryVal} value={salaryVal} currency={"$"}/>
                </div>
            </div>  
            <div>
                <div className="col-md-12 col-sm-12">
                    <RangeSlider heading={"Annual revenue of your organization ($)"} min={10000} max={100000000} title={"Revenue"} setValue={setRevenueVal} value={revenueVal} currency={'$'}/>
                </div>
            </div>  
            <div>
                <div className="col-md-12 col-sm-12 last-card">
                    <RangeSlider heading={"Number of employee who left your organization in the year"} min={0} max={100} title={"Employees Left"} setValue={setEmployeesLeft} value={employeesLeft} roundedBottom={true}/>
                </div>
            </div>  
        
        </div>
    )
}

export default Sliders;
