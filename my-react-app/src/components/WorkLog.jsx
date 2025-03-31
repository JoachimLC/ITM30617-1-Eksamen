import React from "react";
import LogList from "./LogList";

const WorkLog = ({ groupMembers }) => {
  return (
    <>
      <h1>Arbeidslogg</h1>
      <div className="logwrapper">
        {groupMembers.map((member) => (
          <div key={member._id}>
            <LogList logs={member.log} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkLog;
