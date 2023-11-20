import React from "react";
import PurplePersontage from "./persontage/PurplePersontage";
import RedPersontage from "./persontage/RedPersontage";
import GreenPersontage from "./persontage/GreenPersontage";
import SkyPersontage from "./persontage/SkyPersontage";
import './WithdrawCards.css'
function WidthdrawCards(data) {
  return (
    <>
      <div className="withdraw-cards">
        <div className="card-top">
          <p>Purchase Requisitions</p>
          <PurplePersontage />
        </div>
        <p className="nums">423</p>
        <p>current Month</p>
      </div>

      <div className="withdraw-cards">
        <div className="card-top">
          <p>Purchase Requisitions</p>
         <RedPersontage/>
        </div>
        <p className="nums">423</p>
        <p>current Month</p>
      </div>
      <div className="withdraw-cards">
        <div className="card-top">
          <p>Purchase Requisitions</p>
          <GreenPersontage />
        </div>
        <p className="nums">423</p>
        <p>current Month</p>
      </div>

      <div className="withdraw-cards">
        <div className="card-top">
          <p>Purchase Requisitions</p>
          <SkyPersontage />
        </div>
        <p className="nums">423</p>
        <p>current Month</p>
      </div>

      <div className="withdraw-cards">
        <div className="card-top">
          <p>Purchase Requisitions</p>
          <SkyPersontage />
        </div>
        <p className="nums">423</p>
        <p>current Month</p>
      </div>
    </>
  );
}
export default WidthdrawCards;
