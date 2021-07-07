import React, {useRef, useEffect} from 'react'
import './index.css'
import {animateValue} from '../../../utils/tools/index'
import {useElementOnScreen} from '../../../hooks/useElementOnScreen'
import ReactDOM from 'react-dom'

function PercentageCircle({percentage, color, size, title}) {
    const counterRef = useRef()

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        threshold: 0,
        rootMargin: "0px"
    })

    useEffect(()=>{
        console.log("Rendering use effect")
    }, [])

    useEffect(() => {
        animateValue(counterRef, 0, percentage, 700)
    }, [isVisible])
   
    return (
        <>
            <div ref={containerRef} className="percentage-circle-wrapper">
                
                <div className="single-chart" style={{'width': `${size}px`}}>
                    <svg viewBox="0 0 36 36" className="circular-chart" >
                        <path className="circle-bg"
                            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className={`circle ${isVisible ? "circle-animate" : "circle-animate-stop"}`}
                            style={{'stroke': `${color}`}}
                            strokeDasharray={`${percentage}, 100`}
                            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" ref={counterRef} className="percentage counter" data-target={`${percentage}`}>0%</text>
                    </svg>
                </div>
                <div className="percentage-circle-title">
                    <p>{title}</p>
                </div>
            </div> 
        </>
    )
}

const renderComponent=()=>{
    if(typeof window !== "undefined"){ 
        let id1 = document.querySelector("#percentCircle1")
        if (id1 != null){
            ReactDOM.render(
                <PercentageCircle percentage={82} color={`#2C264F`} size={200} title={'Effective onboading process'}/>,
                id1
            )
        } 
        let id2 = document.querySelector("#percentCircle2")
        if (id2 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={25} color={`#2C264F`} size={200} title={'Options for remote work'}/>,
                id2
            )
        }
        let id3 = document.querySelector("#percentCircle3")
        if (id3 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={79} color={`#2C264F`} size={200} title={'Failure to take action against unethical behavior'}/>,
                id3
            )
        }
        let id4 = document.querySelector("#percentCircle4")
        if (id4 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={77} color={`#2C264F`} size={200} title={'Focus on employee experience'}/>,
                id4
            )
        }
        let id5 = document.querySelector("#percentCircle5")
        if (id5 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={31} color={`#2C264F`} size={200} title={'Employee Recognition'}/>,
                id5
            )
        }
        let id6 = document.querySelector("#percentCircle6")
        if (id6 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={35} color={`#2C264F`} size={200} title={'Competitive Compensation'}/>,
                id6
            )
        }
        let id7 = document.querySelector("#percentCircle7")
        if (id7 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={50} color={`#2C264F`} size={200} title={'Employee Burnout'}/>,
                id7
            )
        }
        let id8 = document.querySelector("#percentCircle8")
        if (id8 != null && typeof window !== "undefined"){
            ReactDOM.render(
                <PercentageCircle percentage={70} color={`#2C264F`} size={200} title={'Focus on employee development and learning'}/>,
                id8
            )
        }
    }
}

setInterval(renderComponent,100)

export default PercentageCircle;

