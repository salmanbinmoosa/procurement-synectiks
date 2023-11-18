import React from 'react'
import './PurchaseRequisitionsRequest.css'
function PurchaseRequisitionsRequest() {
  return (
    <div className="PurchaseRequisitionsRequest">
    <div className="request-con">
      <h2>Request No: 06</h2>
      <div className="draft">
        <p>#Draft</p>
      </div>
    </div>

    <form action="#">
      <div className="form-top">
        <div className="inp-containers">
          <label htmlFor="#">Required Delivery Date*</label>
          <div className="date-inp">
            <input type="date" />
            <img className="date-icon" src="" alt="" />
          </div>
        </div>

        {/* Other input containers here... */}
      </div>

      {/* Form bottom */}
      <div className="form-bottom">
        <div className="inp-containers">
          <label htmlFor="#">Required Delivery Date*</label>
          <div className="date-inp">
            <select name="">
              <option value="">Select an option...</option>
            </select>
          </div>
        </div>

        <div className="inp-containers">
          <label htmlFor="#">Required Delivery Date*</label>
          <div className="date-inp">
            <select name="">
              <option value="">Select an option...</option>
            </select>
          </div>
        </div>

        {/* Other input containers here... */}
      </div>
    </form>
  </div>  )
}

export default PurchaseRequisitionsRequest