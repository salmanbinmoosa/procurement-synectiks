import React from "react";
import './Comment.css'


function Comment() {
  return (
    <div className="commentCon">
      <textarea
        placeholder="Write your comment"
        rows={10}
        cols={100}>
      </textarea>

      <div className="btnsCon">
        <button className="commentBtn">Add Comment</button>
        <button className="cancelBtn">Cancel</button>
      </div>
    </div>
  );
}

export default Comment;
