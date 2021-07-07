import React, {useState, createContext} from 'react';

export const AnswersContext = createContext();

const initialValues = { ans1: "", ans2: "", ans3: "",}

export const AnswersProvider = (props) => {
    const [answer, setAnswer] = useState(initialValues)

    const [result, setResult] = useState("")
    const [currValue, setCurrValue] = useState()
    const [selected1, setSelected1] = useState('');
    const [selected2, setSelected2] = useState('');
    const [selected3, setSelected3] = useState('');
    const [show, setShow] = useState(false);
    const [wheelDiv, setWheelDiv] = useState('')
    const [topQuesDiv, setTopQuesDiv] = useState('')
    const [resultIndex, setResultIndex] = useState(0)
    const [formId, setFormId] = useState('')
    const [questionsCompleted, setQuestionsCompleted] = useState(0)

    const contexts = {
        initialValues,
        answer,
        setAnswer,
        result,
        setResult,
        currValue,
        setCurrValue,
        selected1,
        setSelected1,
        selected2,
        setSelected2,
        selected3,
        setSelected3,
        show,
        setShow,
        wheelDiv, 
        setWheelDiv,
        topQuesDiv,
        setTopQuesDiv,
        resultIndex,
        setResultIndex,
        formId, 
        setFormId,
        questionsCompleted,
        setQuestionsCompleted
    }

    return (
        <AnswersContext.Provider value={contexts}>
            {props.children}
        </AnswersContext.Provider>
    )
}

