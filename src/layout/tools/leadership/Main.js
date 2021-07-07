import React from 'react'
import Questions from '../../../module/tools/leadership/questions'
import Results from '../../../module/tools/leadership/results'
import QuestionsCarousel from '../../../module/tools/leadership/questions-carousel'
import './main.css'

function Main() {
    return (
        <>
        <div className="row leadership-main-wrapper" style={{backgroundColor:"#2A2A4C", borderRadius: "4px",}}>
            <div className="row leadership-main-heading-wrapper">
                <section id="leadership_analyzer"><h2 className="leadership-main-heading mt-3">Leadership Analyzer</h2></section>
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-7">
                {/* <Questions/> */}
                <QuestionsCarousel/>
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-5">
                <Results/>
            </div>
        </div>
        </>
    )
}

export default Main
