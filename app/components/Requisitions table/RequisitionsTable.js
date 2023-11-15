import React from "react";

function RequisitionsTable(data) {
  return (
    <table className="requisitions-table">
      <div className="h-row r-h-row">
        <div className="col">
          <p className="col-p">{data.name}</p>
        </div>
        <div className="col">
          <p className="col-p" >{data.loction}</p>
        </div>
        <div className="col">
          <p className="col-p">{data.date}</p>
        </div>
        <div className="col">
          <p className="col-p">{data.stock}</p>
        </div>
        <div className="col">
          <p className="col-p">{data.priority}</p>
        </div>
        <div className="col">
          <p className="col-p">{data.status}</p>
        </div>
        <div className="col">
          <p className="col-p">{data.action}</p>
        </div>
      </div>

      <div className="b-row">
        <div className="col">
          <div className="avatar">
            <img src="images/Avatar (2).png" alt="" />
            <p>Kate Tanner</p>
          </div>
        </div>
        <div className="col">
          <p>Bouvet Island </p>
        </div>
        <div className="col">
          <p>06/07/2023 </p>
        </div>
        <div className="col">
          <p>$299.14</p>
        </div>
        <div className="col priority">
          {" "}
          <img src="images/Group 1000004323.png" alt="" /> <p>Medium</p>
        </div>
        <div className="col">
          <div className="status">
            <p>On Hold</p>
          </div>
        </div>
        <div className="col">
          <img src="images/Shape/More.png" alt="" />
        </div>
      </div>
    </table>
  );
}

export default RequisitionsTable;
