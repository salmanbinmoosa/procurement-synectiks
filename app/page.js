"use client";
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
// import RejectRequest from "../app/components/rejectRequest Comment/rejectRequest";
import DashboardCards from "../app/components/DashboardCards/DashboardCards";
import DashboardBtns from "../app/components/DashboardBtns/DashboardBtns";

import PurchaseRequisitionsPage from "../app/Purchase Requisitions/page";

import PurchaseRequestPage from "../app/PurchaseRequestPage/page";

import ConfirmRequest from '../app/components/confirmRequest/ConfirmRequest'

import RejectRequestComment from '../app/components/RejectRequest Comment/RejectRequestComment'

export default function Home() {

  return (
    <div className="layout">
      <div className="left">
        <a className="id" href="">
          purchase requesation
        </a>
      </div>

      <div className="right">
        <header>
          <SearchBar />
        </header>

        {/* page 1 */}

        {/* page 2 */}
        {/* <PurchaseRequisitionsPage/> */}

        {/* page 3 */}
        <PurchaseRequestPage/>
        

        {/* <div className="dash"> */}
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
              requisitions="Purchase Order"
              persontage="10.0%"
              numbers="$2,868.99"
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
            <div className="chart-left"></div>

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

            <div className="bottom-card">

            </div>

            <div className="bottom-card-two"></div>
          </div>
            <RejectRequestComment/>
        {/* </div> */}


      </div>
    </div>
  );
}

{
  /* <body>
<RequisitionsCards
  img="icons/Icon (1).png"
  numbers="203"
  req="All request"
/>

<TopSuplier
  headOne="Supplier Name"
  headTwo="Total Order "
  headThree="Total Amount"
  avatarName="Hannibal Smith"
  avatar="images/Avatar (2).png"
  totalOrder="122"
  price="$46,660"
/>

<SearchBar />
<RequisitionsTable
  name="salman"
  loction="hyderabad"
  date="Creation Date"
  stock="total cost"
  priority="Priority"
  status="Status"
  action="Action"
/>

<div className="withdraw">
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
<Approval />
<OrderLineComp />
<PurchaseRequest />
<TableButtons />
</body> */
}

// <main className="home-main">
// <div className="home-left"></div>
// <div className="home-right">
//   <div className="search"></div>
//   <div className="wrap">
//     <PurchaseRequest />
//     <Approval />
//   </div>

//   <div className="home-bottom">
//     <h2>Order Line 04</h2>

//     <OrderLineComp />
//     <CreateRfQ />
//   </div>
//   <PurchaseRequisitionsRequest />
//   <AttachmentDocument />
//   <Comment />

//   <RequisitionsTable />
//   <TableButtons />

//   <rejectRequest />
//   <RequisitionsCards numbers="123" req="pending" />

//   <SearchBar />

//   <DashboardCards />

//   <TopSuplier
//     headOne="Supplier Name"
//     headTwo="Total Order "
//     headThree="Total Amount"
//     avatarName="Hannibal Smith"
//     avatar="images/Avatar (2).png"
//     totalOrder="122"
//     price="$46,660"
//   />
// </div>
// </main>

//    <div className="comp-checking">

//         {/* need to add data */}

//         <DashboardBtns/>

//      <RequisitionsCards/>

//      <TopSuplier/>
// <SearchBar/>

// <RequisitionsTable/>

// <DashboardCards/>

// <Approval/>

// <PurchaseRequest/>

// <OrderLineComp/>

// <TableButtons/>

// <CreateRfQ/>

// <PurchaseRequisitionsRequest/>

// <AttachmentDocument/>

// <rejectRequest/>
//       </div>
