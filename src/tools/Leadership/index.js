import React from 'react'
import Main from '../../layout/tools/leadership/Main'
import {Helmet} from "react-helmet"

import { AnswersProvider } from '../../context/tools/leadership/AnswersContexts'

function Leadership() {
    return (
        <div>
            <Helmet>  
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollToPlugin.min.js"></script>
            </Helmet>  
            <AnswersProvider>
                <Main/>
            </AnswersProvider>
        </div>
    )
}

export default Leadership
