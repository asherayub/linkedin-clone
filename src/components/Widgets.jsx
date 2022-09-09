import React from "react";
import "./styles/widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  function newsArticle(heading, subtitle) {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widget__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("react", "Top News - 324 readers")}
      {newsArticle("frontend", "Top Positions - 564 readers")}
      {newsArticle("software engineering", "Top Tech - 8676 readers")}
      {newsArticle("new jobs listed", "Top Jobs - 1235 readers")}
    </div>
  );
}

export default Widgets;
