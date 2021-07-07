import React, {useState, useContext, useEffect} from 'react'
//styles
import './index.css'
//contexts
import {AnswersContext} from '../../../../context/tools/leadership/AnswersContexts'
import {smoothScroll, smoothScrollToTop} from '../../../../utils/tools/leadership/index'

function RadioButtonComponent({ selected, value, text, onChange, questionGroup, setRadioBox, radioBox, divRef }) {
    const { setCurrValue, answer, setAnswer, result } = useContext(AnswersContext)
    
    return (
        <div
            className={`modern-radio-container ${result !== "" && "deselect-container"}`}
            onClick={() => {
                if (questionGroup == 'q1'){
                    onChange(value)
                    setAnswer({...answer, ans1: value})
                    // smoothScroll(divRef.current, 1000)
                }
                if (questionGroup == 'q2'){
                    onChange(value)
                    setAnswer({...answer, ans2: value})
                    // smoothScroll(divRef.current, 1000)
                }
                if (questionGroup == 'q3'){
                    onChange(value)
                    setCurrValue(value)
                    setAnswer({...answer, ans3: value})
                    // smoothScrollToTop(divRef.current, 1000)
                }
            }}
        >
            <div className={`radio-button-answer-wrapper row ${value == selected &&
                        "selected-wrapper"}`}>
                <div
                    className={`radio-outer-circle ${value !== selected && "unselected"} `}
                >
                    <div
                        className={`radio-inner-circle ${value !== selected &&
                        "unselected-circle"}`}
                    />
                </div>
                <div className={`helper-text col-sm-11 ${value == selected &&
                        "selected-text"}`}>{text}</div>
            </div>
        </div>
    )
}

export default RadioButtonComponent
