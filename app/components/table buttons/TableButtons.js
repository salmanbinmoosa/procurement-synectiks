import React from "react";

function TableButtons() {
  return (
    <div className="table-btns">
      <div className="table-btn">
      <img src="tableImages/Capa_1.png" alt="" />
        <p className="tableImages/Capa_1.png">Track</p>
      </div>
      <div className="table-btn">
        <img src="images/Edit.svg" alt="" />
        <p className="table-btn-blue">Modify</p>
      </div>
      <div className="table-btn">
        <img src="tableImages/Iconly/Bold/Delete.png" alt="" />
        <p className="table-btn-red" >Delete</p>
      </div>
    </div>
  );
}

export default TableButtons;
