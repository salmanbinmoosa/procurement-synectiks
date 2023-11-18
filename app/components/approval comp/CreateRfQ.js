import React from "react";
import './Approval.css'
function CreateRfQ() {
  return (
    <>
      <div className="create-RFQ-con">
        <div className="btn-con2">
          <button className="RFQ-create">Create RFQ</button>
          <button className="RFQ-cancel">Cancel</button>
          <button className="RFQ-modify">Modify Request</button>
          <button className="RFQ-compeleted">Mark as Completed</button>
        </div>
      </div>
    </>
  );
}

export default CreateRfQ;
