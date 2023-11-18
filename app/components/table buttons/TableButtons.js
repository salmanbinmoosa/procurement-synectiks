import React from "react";

// css is in global css


function TableButtons() {
  return (
    <div className="tableBtns">
      <button className="btns track">
        <img className="track-icon" src="tableImages/Capa_1.png" alt="" />
        Track
      </button>

      <button className="btns modify">
        <img className="modify-icon" src="images/Edit.svg" alt="" /> Modify
      </button>

      <button className="btns delete">
        <img
          className="delele-icon"
          src="tableImages/Iconly/Bold/Delete.png"
          alt=""
        />{" "}
        Delete
      </button>
    </div>
  );
}

export default TableButtons;
{
  /* <img className="track-icon" src="tableImages/Capa_1.png" alt="" />
      
       */
}
