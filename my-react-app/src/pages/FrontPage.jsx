import React, { useState, useEffect } from 'react';
import { getAllGroupMembers, getAllLogs } from '../sanity/service';
import MemberCards from '../components/MemberCards';
import WorkLog from '../components/WorkLog';

const FrontPage = () => {
  const [groupMembers, setGroupMembers] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [members, logItems] = await Promise.all([
        getAllGroupMembers(),
        getAllLogs()
      ]);

      setGroupMembers(members);
      setLogs(logItems);
    };

    fetchData();
  }, []);

  return (
    <section>
      <MemberCards groupMembers={groupMembers}/>
      <WorkLog logs={logs} />
    </section>
  );
};

export default FrontPage;
