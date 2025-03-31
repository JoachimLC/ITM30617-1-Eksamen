import React from "react";

const LogList = ({ logs }) => {
  return (
    <>
    <div className="loglist">
      <div className="loglist-header">
        <div>Date</div>
        <div>Name</div>
        <div>Change</div>
        <div>Hours</div>
      </div>
      <ul>
        {logs?.map((logitem) => (
          <li key={logitem._id}>
            <div>{new Date(logitem.date).toLocaleDateString()}</div>
            <div>{logitem.member}</div>
            <div>{logitem.action}</div>
            <div>{logitem.hoursSpent}</div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default LogList;
