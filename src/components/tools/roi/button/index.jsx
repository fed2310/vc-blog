import React from 'react'
import { Button } from 'reactstrap'

function ButtonComponent({name}) {
    return (
        <>
            <Button className="btn_get btn-meta btn_hover">{name}</Button>
        </>
    )
}

export default ButtonComponent