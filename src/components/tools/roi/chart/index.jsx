import React, {useEffect} from "react";
import './index.css';
import {Bar} from 'react-chartjs-2'

const ChartComponent = ({data, options, title}) => {
    return (
        <>
           <div>
                <h4 className="chart-title">{title}</h4>
            </div>
            <div className="app">
                <Bar data={data} height={400} width={100} options={{ legend:{display:false}, maintainAspectRatio: false, scales:{yAxes:[{ticks:{beginAtZero: true}, scaleLabel:{ display:true, labelString: 'Currency In USD($)'} }]} }}/>
            </div>
        </>
)
}

export default ChartComponent
