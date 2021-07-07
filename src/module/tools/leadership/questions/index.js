import React, {useContext, useEffect, useRef, useState} from 'react'
import {Transition} from "react-transition-group"
import './index.css'
import {smoothScroll} from '../../../../utils/tools/leadership/index'
import RadioButtonComponent from '../../../../components/tools/leadership/radiobutton/index'
import {AnswersContext} from '../../../../context/tools/leadership/AnswersContexts'

function Questions() {
    const ques1 = useRef()
    const ques2 = useRef()

    const { answer, setAnswer, selected1, 
        setSelected1,
        selected2,
        setSelected2,
        selected3,
        setSelected3,
        wheelDiv,
        setTopQuesDiv} = useContext(AnswersContext)

    useEffect(() => {
       setTopQuesDiv(ques1)
    }, [])

    const options1 = [
        {a1: "Conflicts should be handled in a meeting so that the entire team can participate in finding a solution"},
        {a2: "Conflicts should be addressed early and usually in private with the teammates using a friendly approach"},
        {a3: "You should use your convincing power to quickly resolve the conflict and then focus on goal achievement"}
    ]

    const options2 = [
        {b1: "Encourage creative thinking within the workforce"},
        {b2: "Closely supervise the workforce"},
        {b3: "Get involve with the team and mentor them"}
    ]

    const options3a = [
        {c1: "I seek their constructive feedback/suggestions atleast once a week"},
        {c2: "I prioritize equal participation when it comes to knowledge sharing"},
        {c3: "Get involve with the team and mentor them"}
    ]

    const options3b = [
        {c1: "I’m organized, but I’m more comfortable at managing others than myself"},
        {c2: "Super organized. I’m very detail-oriented"},
        {c3: "I’m organized, but I can be better. My main focus is on the result"}
    ]

    const options3c = [
        {c1: "Reframe the timeline & guide the team to deliver improved results"},
        {c2: "Take responsibility for the team and start working on the loopholes"},
        {c3: "Devise a solution and assign the team to execute it for optimum results"}
    ]

    //render qustion functions

    const question1Render =()=>{
        return(
            <div ref={ques1} className="questions row container">
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
                                divRef = {ques1}
                            />
                        </div>
                    )
                })}  
            </div>
        )
    }

    const question2Render = () => {
        return (
            <div ref={ques2} className="questions row container ">
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
                                divRef = {ques2}
                            />
                        </div>
                    )
                })} 
            </div>
        )
    }

    const question3Render = () => {
        return(
            <div className="questions row container">
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
                            divRef = {wheelDiv}
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
                            divRef = {wheelDiv}
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
                            divRef = {wheelDiv}
                        />
                </div>
            )
            })
            )}
            </div> 
        )
    }

    return (
        <>  
            {question1Render()}

            <Transition
                timeout={1000} mountOnEnter unmountOnExit 
                in={selected1}
                onEntering={(node)=>{
                    gsap.fromTo(node, 0.5, {
                        x: -100,
                        autoAlpha: selected1 !== '' ? 1 : 0,
                    },
                    {
                        x:0 
                    })
                    // setTimeout(function(){ window.scrollTo({top: 5000, left:0, behaviour: 'smooth'})}, 1000);
                }}
            >
                { question2Render()}
            </Transition>

            <Transition
                timeout={1000} mountOnEnter unmountOnExit 
                in={selected2}
                onEntering={(node)=>{
                    gsap.fromTo(node, 0.5, {
                        x: -100,
                        autoAlpha: selected2 !== '' ? 1 : 0,
                    },
                    {
                        x:0 
                    })
                }}
            >
                { question3Render()}
            </Transition>

        </>   
    )
}

export default Questions
