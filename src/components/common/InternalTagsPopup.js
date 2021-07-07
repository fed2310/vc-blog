import React, {useEffect} from 'react'
import { Popup1, Popup2, Popup3,  Popup5, Popup6,  Popup9, Popup10 } from '../common'

function InternalTagsPopup({post}) {
    const tagsMapping = {
        "#emp_eng": <Popup2/>,
        "#rwrd_rcog": <Popup3/>,
        "#wfh_pol": <Popup1/>,
        "#ldrship": <Popup5/>,
        "#post_lckdwn": <Popup6/>,
        "#con_rel": <Popup9/>,
        "#360_appraisal": <Popup10/>,
        "Employee Engagement": <Popup2/>,
        "Employee Benefits": <Popup2/>,
        "Employee Survey": <Popup2/>,
        "Rewards and Recognition": <Popup3/>,
        "Management": <Popup5/>,
        "Remote Work": <Popup1/>,
        "Hiring & Recruitment": <Popup9/>,
        "Company Culture": <Popup9/>,
        "Workplace Communication": <Popup9/>,
        "Performance Management": <Popup10/>,
    }
    const keys = Object.keys(tagsMapping)
    const values = Object.values(tagsMapping)
    // console.log(post.tags)
    const renderPopUp=() => {
        for (let x in keys){
            if(post.tags.some(item => item.name == keys[x])){
                return values[x]
            }
        }
        return <Popup3/>
    }

    return (
        <>
            {renderPopUp()}
        </>
    )
}

export default InternalTagsPopup
