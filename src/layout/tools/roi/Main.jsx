import React, {useContext} from 'react'

//pages
import Sliders from '../../../module/tools/roi/sliders/Sliders'
import Result from '../../../module/tools/roi/results/Result'
import ChartData from '../../../module/tools/roi/chart-data/index'
import ModalPopUp from '../../../module/tools/roi/modal/index'
import Content from '../../../module/tools/roi/content'

import {ModalContext} from '../../../context/tools/roi/ModalContext'

function MainLayout(){
    const {
        show,
    } = useContext(ModalContext)

    return (
        <>
            <div className="main-wrapper p-1 container-xxl">
                <ModalPopUp show={show}/>
                <div className="background-wrapper">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-sm-12 mt-1">
                            <div className="slider-wrapper"><Sliders/></div>
                        </div>
                        <div className="col-md-12 col-lg-8 col-sm-12 mt-5">
                            <div className="results-wrapper">
                                <Result/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <ChartData/>
                    <Content/>
                </div>
            </div>
        </>
    )
}

export default MainLayout
