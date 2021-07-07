import React, {useState, useEffect, useContext} from 'react'

import ChartComponent from '../../../../components/tools/roi/chart'
import { CurrValueContext } from '../../../../context/tools/roi/CurrentValueContext'
import './index.css'

//context
import {revenueWithEmployeeEngagementCal} from '../../../../utils/tools/roi';

function ChartData() {
    const width = typeof window !== `undefined` ? window.innerWidth : null
    const breakpoint = 1367
    
    function checkViewPoint(){
        if(width>breakpoint) return true
        if(width<breakpoint) return false
    }

    const { revenueVal,    
        totalBusinessValue,
    } = useContext(CurrValueContext);

    const [revenueWithEmployeeEngagement, setRevenueWithEmployeeEngagement] = useState()
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setRevenueWithEmployeeEngagement(revenueWithEmployeeEngagementCal(revenueVal, totalBusinessValue))
        setChartData([, revenueWithEmployeeEngagement])
    }, [revenueVal, revenueWithEmployeeEngagement,])

    useEffect(() => {
        setRevenueWithEmployeeEngagement(revenueWithEmployeeEngagementCal(revenueVal, totalBusinessValue))
        setChartData([revenueVal, revenueWithEmployeeEngagement])
    }, [revenueVal, revenueWithEmployeeEngagement])

    const state = {
        labels: ['Your Current Revenue', 'Revenue With Employee Engagement'],
        datasets: [
            {
                label: 'Annual Revenue of your Organization',
                data: chartData,
                // xAxisID: '',
                // yAxisID: '',
                
                ...(checkViewPoint() && {backgroundColor: [ '#fd7e14', '#2C2650',]}),
                ...(!checkViewPoint() && {backgroundColor: [ '#fd7e14', '#ffff',]}),
            }
        ]
    }

    return (
        <div className="chart-container col-sm-12 col-md-6 mx-auto text-center">
            <ChartComponent 
               data = {state}
               title={"Annual Revenue of your Organization"}
            />   
        </div>
    )
}

export default ChartData;
