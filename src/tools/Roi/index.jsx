import React from 'react'
//styles
import './index.css'
// import '.GSAPComponent.css';

//layout
import MainLayout from '../../layout/tools/roi/Main'

//context
import { CurrValueProvider } from '../../context/tools/roi/CurrentValueContext'
import { ModalProvider } from '../../context/tools/roi/ModalContext'

function Roi() {
    return (
        <div className="app-wrapper">
            <div className="home-layout ">
                <ul className="bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <CurrValueProvider>
                    <ModalProvider>
                        <MainLayout/>
                    </ModalProvider>
                </CurrValueProvider>
            </div>
        </div>
    )
}

export default Roi
