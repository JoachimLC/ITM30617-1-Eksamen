import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupMemberById, getLogsByMemberId } from '../sanity/service';
import MemberDetails from '../components/MemberDetails';
import WorkLog from '../components/WorkLog';

const MemberPage = () => {
  const { id } = useParams(); 
  const [member, setMember] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedMember, fetchedLogs] = await Promise.all([
        getGroupMemberById(id),
        getLogsByMemberId(id)
      ]);
      setMember(fetchedMember);
      setLogs(fetchedLogs);
    };

    fetchData();
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <MemberDetails member={member} />
      <WorkLog logs={logs} />
    </section>
  );
};

export default MemberPage;
