import React from "react";

const buttonStyles = {
  tableBtns: {
    width: '120px',
    height: '114px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.10)',
  },
  tableBtn: {
    width: '100px',
    height: '27px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    gap: '10px',
  },
  tableBtn1: {
    background: '#97f18d47',
    color: '#17BF33',
    cursur:"pointer"
  },
  tableBtn2: {
    background: '#5b92ff0c',
    color: '#5B93FF',
    cursur:"pointer"

  },
  tableBtn3: {
    background: '#e71d3531',
    color: '#E71D36',
    cursur:"pointer"

  },
  imagSizes: {

  }
};

function TableButtons() {
  return (
    <div style={buttonStyles.tableBtns}>
      <div style={{ ...buttonStyles.tableBtn, ...buttonStyles.tableBtn1 }}>
        <img className="track-icon" src="tableImages/Capa_1.png" alt="" />
        <p>Track</p>
      </div>
      <div style={{ ...buttonStyles.tableBtn, ...buttonStyles.tableBtn2 }}>
        <img className="modify-icon" src="images/Edit.svg" alt="" />
        <p>Modify</p>
      </div>
      <div style={{ ...buttonStyles.tableBtn, ...buttonStyles.tableBtn3 }}>
        <img className="delele-icon" src="tableImages/Iconly/Bold/Delete.png" alt="" />
        <p>Delete</p>
      </div>
    </div>
  );
}

export default TableButtons;
