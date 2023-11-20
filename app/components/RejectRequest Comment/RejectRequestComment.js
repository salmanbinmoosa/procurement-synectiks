import React from "react";
import "./RejectRequestComment.css";
function RejectRequestComment() {
  return (
    <div className="RejectRequestComment">
      <div className="heading-wrap">
        <h2>Are you sure you want to reject this <br /> Request ?</h2>
        <p>Please provide a comment stating the reasons for rejection</p>
      </div>

      <div className="comment">
        <p>Comment</p>
        <textarea cols="30" rows="10"></textarea>
        <div className="RejectRequestCommentBtns">
            <button>Yes</button>
            <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default RejectRequestComment;
