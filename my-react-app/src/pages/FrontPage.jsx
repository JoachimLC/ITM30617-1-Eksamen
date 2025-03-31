import React, { useState, useEffect } from 'react';
import { getAllGroupMembers } from '../sanity/service';
import MemberCards from '../components/MemberCards';
import WorkLog from '../components/WorkLog';

const FrontPage = () => {
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const members = await getAllGroupMembers();
      setGroupMembers(members);
    };

    fetchMembers();
  }, []);

  return (
    <section>
      <MemberCards groupMembers={groupMembers}/>
      <WorkLog groupMembers={groupMembers}/>
    </section>
  );
};

export default FrontPage;
