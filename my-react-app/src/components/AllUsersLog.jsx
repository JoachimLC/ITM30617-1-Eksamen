import React from "react";

const AllUsersLog = ({ groupMembers }) => {
  return (
    <div className="log-container">
      {groupMembers.map((member) => (
        <div key={member._id}>
          {member.log?.map((logitem) => (
            <div key={logitem._id}>
              <p className="default">{new Date(logitem.date).toLocaleDateString()}</p>
              <p className="default">{logitem.member}</p>
              <p className="default">{logitem.action}</p>
              <p className="default">{logitem.hoursSpent}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllUsersLog;
