import React from "react";

import PurchaseRequest from "../components/Purchase Request/PurchaseRequest";
import "./PurchaseRequestPage.css";

import TableButtons from "../components/table buttons/TableButtons";
import Approval from "../components/approval comp/Approval";

import OrderLineComp from "../components/order line comp/OrderLineComp";
function PurchaseRequestPage() {
  return (
    <div className="PurchaseRequestPage">
      <div className="PurchaseRequestPageHeading">
        <h2>Purchase Requisitions</h2>
        <img src="" alt="" />
        <h2 className="headingtwo">Purchase Request</h2>
      </div>

      <div className="mainRequest">
        <PurchaseRequest />

        <Approval />
        
      </div>

      {/* order line s */}

      <div className="orderLineLists">
        <h2 className="orderlineheading">Order Line 04</h2>

        <OrderLineComp />
      </div>
    </div>
  );
}

export default PurchaseRequestPage;
