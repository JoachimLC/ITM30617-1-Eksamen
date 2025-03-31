import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupMemberById } from '../sanity/service';
import MemberDetails from '../components/MemberDetails';
import WorkLog from '../components/WorkLog';

const MemberPage = () => {
  const { id } = useParams(); 
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
        const fetchedMember = await getGroupMemberById(id);
        setMember(fetchedMember);
    };

    fetchMember();
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <MemberDetails member={member} />
      <WorkLog groupMembers={[member]} />
    </section>
  );
};

export default MemberPage;
