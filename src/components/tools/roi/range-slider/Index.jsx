import React, { useContext, useState, useEffect, useRef } from 'react';

//utils
import {numberFormat, currencyFormat} from '../../../../utils/tools/roi/index'

//styles
import './Index.css';

//context
import {CurrValueContext} from '../../../../context/tools/roi/CurrentValueContext';

function RangeSlider({heading, title, min, max, setValue, currency='', value, roundedTop=false, roundedBottom=false, placeholder}) {
//ref for input slider
    const inputRef = useRef()

    const [gradient, setGradient] = useState(50)

    const num = 70
    
    const { setCurrValue } = useContext(CurrValueContext)
    const [state, setState] = useState()

    const handleOnChange = (e) => {
        if (e.target.value <= 0){
            setState(e.target.min)
            const target = e.target
            var cal = (target.value - target.min) / (target.max - target.min) * 100
            setGradient(cal)
        }
        else {
            setState(e.target.value)
            const target = e.target
            var cal = (target.value - target.min) / (target.max - target.min) * 100
            setGradient(cal)
        } 
    }

    useEffect(() => {
        setCurrValue(0)
    }, [])

    useEffect(() => {
        setValue(state)
    }, [state])

    //if icon is sprite use these cal
    const calculateSpritePosition = () =>{
        if (title == "Employee"){
            return { backgroundPosition: ' -26px 130px '}
        }
        if (title == "Salary"){
            return { backgroundPosition: '-26px 194px'}
        }
        if (title == "Revenue"){
            return { backgroundPosition: '-26px 248px'}
        }
        if (title == "Employees Left"){
            return { backgroundPosition: '-26px 194px'}
        }
    }

    //input text box 
    const currencyRender = () => {
        if(currency == "$") return (
            <span className="card-input-text currency d-flex align-items-center">
                <input type="number" min={min} max={max} onChange={handleOnChange} required={true}
                    className="input-group-text float-right" id="basic-addon2" value={value} placeholder={placeholder}/>
            </span>
        )
        return (
            <span className="card-input-text d-flex align-items-center">
                <input type="number" min={min} max={max} onChange={handleOnChange} required={true}
                    className="input-group-text float-right" id="basic-addon2" value={value} placeholder={placeholder}/>  
            </span>
        )
    }

    return (
        <>
            <div className={`main-wrapper card container ${roundedTop ? "form-group-2" : roundedBottom ? "form-group-3" : "form-group"}`}>
                <div className="card-body">
                    <div className="row">
                        <label htmlFor={title}>{heading}</label>
                    </div>  
                    <div className="input-group-append row d-flex justify-content-between">
                        <div className="card-icon" style={calculateSpritePosition()}> </div>
                        <span className="card-input-text d-flex align-items-center">
                            {currencyRender()}
                        </span> 
                    </div>
                    <div className="slider input-group row">
                        <input style={{ background: `linear-gradient(to right, #fd7e14 0%, #fd7e14 ${gradient}%,#eee ${gradient}%, #eee 100%)`}} ref={inputRef} type="range" min={min} max={max} value={state} onChange={handleOnChange}/>
                        <label className="slider-range-left">{(currency == '$') ? currencyFormat(min) : numberFormat(min)}</label>
                        <label className="slider-range-right ml-auto">{(currency == '$') ? currencyFormat(max) : numberFormat(max)}</label>
                    </div>
                </div>    
            </div>       
        </>
    )
}

export default RangeSlider;