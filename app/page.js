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
export default function Home() {
  return (
    <>
      <body>
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
      </body>
    </>
  );
}
