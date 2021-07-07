//employee cost data calculations
export const employeeCostData = {
    revenuePerEmployee:{
        current: 0,
        higherEngagement: 0,
    },
    costOfAbsentismPerEmployee:{
        current: 0,
        higherEngagement: 0
    },
    costOfAbsentism:{
        current: 0,
        higherEngagement: 0
    },
    turnOverRate:{
        current: 0,
        higherEngagement: 0
    },
    employeeLeftInAYear:{
        current: 0,
        higherEngagement: 0
    },
    avgCostToReplaceEmployee:{
        current: 0,
        higherEngagement: 0
    },
    totalCostOfTurnOver:{
        current: 0,
        higherEngagement: 0
    },
}

//precalculation functions
export const revenuePerEmployeeCal = (revenueVal, employeeVal) => {
    employeeCostData.revenuePerEmployee.current = (Number(revenueVal) / Number(employeeVal))
    employeeCostData.revenuePerEmployee.higherEngagement = ((employeeCostData.revenuePerEmployee.current) * 0.21)+(employeeCostData.revenuePerEmployee.current)
}

export const costOfAbsentismPerEmployeeCal = (salaryVal) => {
    employeeCostData.costOfAbsentismPerEmployee.current = (0.012 * Number(employeeCostData.revenuePerEmployee.current)) + (0.012 * Number(salaryVal))
    employeeCostData.costOfAbsentismPerEmployee.higherEngagement = Number(employeeCostData.costOfAbsentismPerEmployee.current) - (0.37 * Number(employeeCostData.costOfAbsentismPerEmployee.current))
}

export const costOfAbsentismCal = (employeeVal) => {
    employeeCostData.costOfAbsentism.current = (Number(employeeCostData.costOfAbsentismPerEmployee.current) * Number(employeeVal)) 
    employeeCostData.costOfAbsentism.higherEngagement = (Number(employeeCostData.costOfAbsentismPerEmployee.higherEngagement) * Number(employeeVal))
}

export const turnOverRateCal = (employeesLeft, employeeVal) => {
    employeeCostData.turnOverRate.current = (Number(employeesLeft) / Number(employeeVal)) * 100
    employeeCostData.turnOverRate.higherEngagement = ((Number(employeesLeft) * 0.6) / Number(employeeVal)) * 100
}

export const numberOfEmployeeLeaveInAYearCal = (employeeVal) => {
    employeeCostData.employeeLeftInAYear.current = (employeeCostData.turnOverRate.current * Number(employeeVal))/100
    employeeCostData.employeeLeftInAYear.higherEngagement = (employeeCostData.turnOverRate.higherEngagement * Number(employeeVal))/100
}

export const avgCostToReplaceEmployeeCal = (salaryVal) => {
    employeeCostData.avgCostToReplaceEmployee.current = (Number(salaryVal)/12)*9
    employeeCostData.avgCostToReplaceEmployee.higherEngagement = employeeCostData.avgCostToReplaceEmployee.current
}

export const totalCostOfTurnOverCal = (employeesLeft) => {
    employeeCostData.totalCostOfTurnOver.current = Number(employeesLeft) * employeeCostData.avgCostToReplaceEmployee.current
    employeeCostData.totalCostOfTurnOver.higherEngagement = employeeCostData.employeeLeftInAYear.higherEngagement * employeeCostData.avgCostToReplaceEmployee.higherEngagement
}


//main calculations
export const productivityGainsCal = (employeeVal, revenueVal) => {
  let res =  ((Number(employeeVal) * employeeCostData.revenuePerEmployee.higherEngagement)) - Number(revenueVal)
  if(res) return Number(res).toFixed(0) 
  //hardcoding the default value
  if(!res) return 2100 
}

export const savingFromLessAbsentismCal = () => {
    let res = (Number (employeeCostData.costOfAbsentism.current) - Number(employeeCostData.costOfAbsentism.higherEngagement))
    if(res) return Number(res).toFixed(0)
    if(!res) return 67
}

export const savingFromLessTurnoverCal = () => {
    let res = Number(employeeCostData.totalCostOfTurnOver.current - employeeCostData.totalCostOfTurnOver.higherEngagement)
    if(res) return Number(res).toFixed(0)
    if(!res) return 0
}

export const totalBusinessValueCal = (productivityGains, savingFromLessAbsentism, savingFromLessTurnover) => {
    let res =  (Number(productivityGains) + Number(savingFromLessAbsentism) + Number(savingFromLessTurnover))
    return Number(res).toFixed(0)
}

export const totalBusinessValuePerEmployeeCal = (totalBusinessValue, employeeVal) => {
    let res = (Number(totalBusinessValue) / Number(employeeVal))
    if(res) return Number(res).toFixed(0)
    if(!res) return 433
}

export const revenueWithEmployeeEngagementCal = (revenueVal, totalBusinessValue) => {
    let res = (Number(revenueVal) + Number(totalBusinessValue))
    if(res) return Number(res).toFixed(0)
    if(!res) return 0
}

//email validation
export function validateEmail(emailString){
    var temp = false
    if (emailString !== undefined){
        const email = emailString.split('@')
        const rejectedDomains = ['yahoo.com', 'gmail.com',]
        for (let i in rejectedDomains){
            if (email[1].toLowerCase().includes(rejectedDomains[i])){
                temp = true;
                break;
            } 
        }
        return temp
    }
    else {
        return temp
    }
}  

//currency formatting
export const currencyFormat = value =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(value);

//number formatting
export const numberFormat = value =>
    new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
    }).format(value);