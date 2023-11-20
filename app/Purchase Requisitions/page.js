import React from "react";

// importing css from style css


import './style.css'
import RequisitionsCards from "../components/Card comps/RequisitionsCards";
import  RequisitionsTable from '../components/Requisitions table/RequisitionsTable'

import Search from '../components/search bar/SearchBar'
function PurchaseRequisitionsPage() {
  return (
    <div className="PurchaseRequisitionsPage">

        <div className="PurchaseRequisitionsPageCards">


        <RequisitionsCards
        img="icons/Icon (1).png"
        numbers="203"
        req="All request"
      />
        <RequisitionsCards
        img="icons/Icon (1).png"
        numbers="203"
        req="All request"
      />
        <RequisitionsCards
        img="icons/Icon (1).png"
        numbers="203"
        req="All request"
      />
        <RequisitionsCards
        img="icons/Icon (1).png"
        numbers="203"
        req="All request"
      />
        <RequisitionsCards
        img="icons/Icon (1).png"
        numbers="203"
        req="All request"
      />
     

</div>


<div className="PurchaseRequisitionsPageRequests">

<div className="requestsTop">
    <Search/>
</div>

<div className="RequisitionsTableRequestsList">
<RequisitionsTable/>
</div>
</div>
    </div>
  );
}

export default PurchaseRequisitionsPage;
