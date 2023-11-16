import React from "react";
import './TopSupplier.css'
function TopSuplier(data) {
  return (
    <>
      <div className="top-suplier">
        <div className="headin">
          <h2>Top Suppliers</h2>
        </div>
        <div className="head-row">
          <div className="col">
            <p>{data.headOne}</p>
          </div>
          <div className="col">
            <p>{data.headTwo}</p>
          </div>
          <div className="col">
            <p>{data.headThree}</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="sup-details">
            <div className="col">
          <div className="avatar">
            <img src={data.avatar} alt="" />
            <p>{data.avatarName}</p>
          </div>
          </div>

          <div className="col total-order">
            <p>{data.totalOrder}</p>
          </div>
          <div className="col">
          <p>{data.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSuplier;
