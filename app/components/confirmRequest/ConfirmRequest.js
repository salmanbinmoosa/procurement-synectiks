import React from 'react'
import './ConfirmRequest.css'

function ConfirmRequest() {
  return (
    <div className="confirmRequest">
        <h2>Confirm your decision to approve <br /> this request</h2>
        <div className="btns">
            <button>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default ConfirmRequest