import React from "react";

import Image from "next/image";
import RequisitionsCards from "../app/components/Card comps/RequisitionsCards";
import TopSuplier from "../app/components//TopSuplier/TopSuplier";
import SearchBar from "../app/components/search bar/SearchBar";
import RequisitionsTable from "../app/components/Requisitions table/RequisitionsTable";
import WidthdrawCards from "../app/components/withdraw comps/WidthdrawCards";
import Approval from "../app/components/approval comp/Approval";
import PurchaseRequest from "../app/components/Purchase Request/PurchaseRequest";
import OrderLineComp from "../app/components/order line comp/OrderLineComp";
import TableButtons from "../app/components/table buttons/TableButtons";
import CreateRfQ from "./components/approval comp/CreateRfQ";
import "./home.css";
import PurchaseRequisitionsRequest from "../app/my request components/repeat delete  buttons comp/purchase request my requester/PurchaseRequisitionsRequest";
import AttachmentDocument from "../app/my request components/Attachment Document/AttachmentDocument";
import Comment from "../app/my request components/comment/Comment";
import rejectRequest from "../app/components/rejectRequest Comment/rejectRequest";
import DashboardCards from "../app/components/DashboardCards/DashboardCards";
import DashboardBtns from "../app/components/DashboardBtns/DashboardBtns";

function Dashboard() {
  return (
    <div className="dash">
      <h2>Dashboard</h2>
      <p>Hello, James. Welcome to Synectiks</p>

      <div className="dashboard-karts">
        <WidthdrawCards
          requisitions="Purchase Requisitions"
          persontage="10.0%"
          numbers="423"
          month="current Month"
          img="icons/up.png"
        />

        <WidthdrawCards
          requisitions="Purchase Requisitions"
          persontage="10.0%"
          numbers="423"
          month="current Month"
          img="icons/up.png"
        />

        <WidthdrawCards
          requisitions="Purchase Requisitions"
          persontage="10.0%"
          numbers="423"
          month="current Month"
          img="icons/up.png"
        />

        <WidthdrawCards
          requisitions="Purchase Requisitions"
          persontage="10.0%"
          numbers="423"
          month="current Month"
          img="icons/up.png"
        />

        <WidthdrawCards
          requisitions="Purchase Requisitions"
          persontage="10.0%"
          numbers="423"
          month="current Month"
          img="icons/up.png"
        />
      </div>
      {/*  */}

      <div className="chartz">
        <div className="chart-left">
          <Chart />
        </div>

        <div className="chart-right"></div>
      </div>

      <div className="purchase-order"></div>

      <div className="bottom-area">
        <TopSuplier
          headOne="Supplier Name"
          headTwo="Total Order "
          headThree="Total Amount"
          avatarName="Hannibal Smith"
          avatar="images/Avatar (2).png"
          totalOrder="122"
          price="$46,660"
        />

        <div className="bottom-card"></div>

        <div className="bottom-card-two"></div>
      </div>
    </div>
  );
}

export default Dashboard;
