import React, { useState, useContext, useEffect } from 'react'
import {Transition} from "react-transition-group"
import { Progress } from 'reactstrap';
import RadioButtonComponent from '../../../../components/tools/leadership/radiobutton/index'
import { options1, options2, options3a, options3b, options3c, mapResult, places, smoothScrollToTop} from '../../../../utils/tools/leadership/index'
import './index.css';
import { AnswersContext } from '../../../../context/tools/leadership/AnswersContexts'

function QuestionsCarousel() {
    const { answer, selected1, setSelected1,
        selected2, setSelected2,
        selected3, setSelected3, setResult,
        setFormId, currValue,
        questionsCompleted, setQuestionsCompleted,
        setResultIndex, wheelDiv
    } = useContext(AnswersContext)

    const calculateCompletedPercentage = () =>{
        var result = ((questionsCompleted+1) / 3) * 100
        return result
    }

    const onPrevHandler = () => {
        if(questionsCompleted == 0) return
        else {
            setQuestionsCompleted(prevQuestionsCompleted => prevQuestionsCompleted - 1)
        }
    }

    const onNextHandler = () => {
        if (questionsCompleted == 1 && selected2 == "" ) return
        if (questionsCompleted == 0 && selected1 == "" ) return
        else (setQuestionsCompleted(prevQuestionsCompleted => prevQuestionsCompleted + 1))
    }

    const onResultHandler = () => {
        mapResult(answer, places, setResult, setResultIndex, setFormId)
        smoothScrollToTop(wheelDiv, 2000)
    }

    const question1Render = () => {
        return(
            <div className="questions row">
                <div className="col-sm-12">
                    <h2 className="question-heading">As a leader, when you notice any project execution conflicts within the teammates, how are you going to solve the issue?</h2>
                </div>
                {options1.map((ele, pos)=>{
                    const question = Object.values(ele)
                    const val = Object.keys(ele)
                    return (
                        <div key={pos} className="container question-options mb-4">
                            <RadioButtonComponent
                                value={`${val}`}
                                selected={selected1}
                                text={question}
                                onChange={setSelected1}
                                questionGroup="q1"
                            />
                        </div>
                    )
                })}  
            </div>
        )
    }

    const question2Render = () => {
        return (
            <div className="questions row ">
                {(Object.values(answer)[0] != '') && <div className="col-sm-12">
                    <h2 className="question-heading">You and your team are assigned a project that needs to be completed within a stipulated time frame. What would you do as a leader to accomplish the task?</h2>
                </div>}
                {(Object.values(answer)[0] != '') && options2.map((ele, pos)=>{
                    const question = Object.values(ele)
                    const val = Object.keys(ele)
                    return (
                        <div key={pos} className="container question-options mb-4">
                            <RadioButtonComponent
                                value={`${val}`}
                                selected={selected2}
                                text={question}
                                onChange={setSelected2}
                                questionGroup="q2"
                            />
                        </div>
                    )
                })} 
            </div>
        )
    }

    const question3Render = () => {
        return(
            <div className="questions row ">
            {(Object.values(answer)[1] !== '') && <div className="col-sm-12">
                <h2 className="question-heading">Which of the following best describes your communication style with your workforce?</h2>
            </div>}
            {(Object.values(answer)[1] == 'b1') && (
                options3a.map((ele, pos)=>{
                const question = Object.values(ele)
                const val = Object.keys(ele)
            return (
                <div key={pos} className="container question-options mb-4">
                        <RadioButtonComponent
                            value={`${val}`}
                            selected={selected3}
                            text={question}
                            onChange={setSelected3}
                            questionGroup="q3"
                        />
                </div>
            )
            })
            )}
            {(Object.values(answer)[1] == 'b2') && (
                options3b.map((ele, pos)=>{
                const question = Object.values(ele)
                const val = Object.keys(ele)
            return (
                <div key={pos} className="container question-options mb-4">
                        <RadioButtonComponent
                            value={`${val}`}
                            selected={selected3}
                            text={question}
                            onChange={setSelected3}
                            questionGroup="q3"
                        />
                </div>
            )
            })
            )}
            {(Object.values(answer)[1] == 'b3') && (
                options3c.map((ele, pos)=>{
                const question = Object.values(ele)
                const val = Object.keys(ele)
            return (
                <div key={pos} className="container question-options mb-4">
                        <RadioButtonComponent
                            value={`${val}`}
                            selected={selected3}
                            text={question}
                            onChange={setSelected3}
                            questionGroup="q3"
                        />
                </div>
            )
            })
            )}
            </div> 
        )
    }

    return (
        <div className="questions-carousel-wrapper mt-3">
            <div className="row">
                <h3 className="col-sm-6">Leadership Questions</h3>
                <h3 className="col-sm-6 text-right">{questionsCompleted+1}/3</h3>
            </div>
            <Progress value={calculateCompletedPercentage()} />
            {questionsCompleted == 0 && question1Render()}

            <Transition
                timeout={1} mountOnEnter unmountOnExit 
                in={questionsCompleted == 1}
                onEntering={(node)=>{
                    gsap.fromTo(node, 0.5, {
                        x: -10,
                        autoAlpha: questionsCompleted == 1 ? 1 : 0,
                    },
                    {
                        x:0 
                    })
                }}
            >
                { question2Render()}
            </Transition>
             
            <Transition
                timeout={1} mountOnEnter unmountOnExit 
                in={questionsCompleted == 2}
                onEntering={(node)=>{
                    gsap.fromTo(node, 0.5, {
                        x: -10,
                        autoAlpha: questionsCompleted == 2 ? 1 : 0,
                    },
                    {
                        x:0 
                    })
                }}
            >
                { question3Render()}
            </Transition>

            <div className="row leadership-next-prev-wrapper">
            
                {questionsCompleted !== 0 && <div className="col-xs-6 ">
                    <p onClick={onPrevHandler} className="leadership-prev">Prev</p>
                </div>}
                
                {questionsCompleted !== 2 ? ( 
                    questionsCompleted == 0 ?
                        <div className="col-xs-6 text-right ml-auto">
                            <p onClick={onNextHandler} className={`leadership-next ${selected1 != '' && "selected-next"}`}><span>Next</span></p>
                        </div> : 
                        <div className="col-xs-6 text-right ml-auto">
                            <p onClick={onNextHandler} className={`leadership-next ${selected2 != '' && "selected-next"}`}><span>Next</span></p>
                        </div> 
                ) 
                    : 
                    (<div className="col-xs-6 text-right ml-auto">
                        <p onClick={onResultHandler} className={`leadership-result ${selected3 != "" && "selected-result"}`}><span>View Result</span></p>
                    </div>) }
            </div>
        </div>
    )
}

export default QuestionsCarousel
