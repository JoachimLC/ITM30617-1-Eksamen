import React from "react";
import LogList from "./LogList";

const WorkLog = ({ logs }) => {
  return (
    <>
      <h1>Arbeidslogg</h1>
      <div className="logwrapper">
        <div className="loglist-header">
          <p>Date</p>
          <p>Name</p>
          <p>Change</p>
          <p>Hours</p>
        </div>
        <LogList logs={logs} />
      </div>
    </>
  );
};

export default WorkLog;
