import React from 'react'
import HubspotForm from 'react-hubspot-form'

function HubspotForm({formID}) {
    return (
        <div>
            <HubspotForm
                portalId='6153052'
                formId=`${formID}`
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
        </div>
    )
}

export default HubspotForm
