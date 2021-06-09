import React from 'react'

const Alert = ({isEdited, isSubmitted, isNotSubmitted}) => {
    return (
        <div>
            {isSubmitted && <p className={`alert alert-success`}>Data has been Submitted</p>}
            {isEdited && <p className={`alert alert-success`}>Data has been edited</p>}
            {isNotSubmitted && <p className={`alert alert-danger`}>Data has not been Submitted</p>}
        </div>
    )
}

export default Alert
