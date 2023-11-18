import React from "react";
import './AttachmentDocument.css'

function AttachmentDocument() {
  return (
    <div className="documentCon">
      <label For="uploadDocument">
        <input id="uploadDocument" type="file" />
        <div className="document">
          <img src="" alt="" />
          <p className="documentText">
            Drop your file here to upload <br />
            or select from storage
          </p>
        </div>
      </label>

      <button className="BrowseBtn">Browse</button>
      <div className="line"></div>
      <div className="fileDowload">
        <img className="folderIcon" src="" alt="" />
        <div className="progressWrap">
          <div className="fileName">
            <p>File_Name.zip</p>
            <p>52%</p>
          </div>
          <div className="DownloadProgress">
            <div className="DownloadProgressInner"></div>
          </div>
        </div>
        <img className="cancelBtn" src="" alt="" />
      </div>
    </div>
  );
}

export default AttachmentDocument;
