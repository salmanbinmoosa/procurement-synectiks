import React from "react";
import './Notification.css'
function Notification() {
  return (
    <div className="Notification">
      <div className="NotificationLeft">
      <img src="notificationImgs/Icon.png" alt="" />
      <div className="text">
        <p>Success</p>
        <p>The Request has been Approved</p>
      </div>
      </div>

      <img src="notificationImgs/Icon Button.png" alt="" />
    </div>
  );
}


export default Notification;
