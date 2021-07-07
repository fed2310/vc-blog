import React, {useState, createContext} from 'react';

export const CurrValueContext = createContext();

export const CurrValueProvider = (props) => {
    const [currValue, setCurrValue] = useState(0);
    const [employeeVal, setEmployeeVal] = useState(0);
    const [salaryVal, setSalaryVal] = useState(0);
    const [revenueVal, setRevenueVal] = useState(0);
    const [employeesLeft, setEmployeesLeft] = useState(0);
    const [revenueWithEmployeeEngagement, setRevenueWithEmployeeEngagement] = useState(0)
    const [totalBusinessValue, setTotalBusinessValue] = useState(0);
    const [totalBusinessValuePerEmployee, setTotalBusinessValuePerEmployee] = useState(0);
    const [productivityGains, setProductivityGains] = useState(0)
    const [savingFromLessAbsentism, setSavingFromLessAbsentism] = useState(0)
    const [savingFromLessTurnover, setSavingFromLessTurnOver] = useState(0)

    const contexts = {
        currValue,
        setCurrValue,
        employeeVal,
        setEmployeeVal,
        salaryVal,
        setSalaryVal,
        revenueVal,
        setRevenueVal,
        employeesLeft,
        setEmployeesLeft,
        revenueWithEmployeeEngagement,
        setRevenueWithEmployeeEngagement,
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
    }

    return (
        <CurrValueContext.Provider value={contexts}>
            {props.children}
        </CurrValueContext.Provider>
    )
}

