import React from "react";
import './Approval.css'
function Approval() {

  return (
    <>
      <div className="approval-con">
        <h2>This order needs your approval</h2>
        <div className="btn-con">
          <button>Approval</button>
          <button>Cancel</button>
        </div>
        <div className="btn-con2">
          <button>Modify Request</button>
          <button>Hold Request</button>
        </div>
      </div>
    </>
  );
}

export default Approval;
