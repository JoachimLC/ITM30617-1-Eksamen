import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupMemberById } from '../sanity/service';
import { urlFor } from '../sanity/service';

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
    <section className="member-page">
      <h1>{member.name}</h1>
      <p>{member.biography}</p>

      <img 
        src={urlFor(member.image).width(300).url()}
        className="member-image"
      />
      
      <h2>Interests</h2>
      <ul className="member-interests">
        {member.interests?.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      
      <h2>Loggføringer</h2>
      <ul className="member-logs">
        {member.log?.map((logitem) => (
          <li key={logitem._id}>
            <div> {new Date(logitem.date).toLocaleDateString()}</div>
            <div> {logitem.member}</div>
            <div> {logitem.action}</div>
            <div> {logitem.hoursSpent}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MemberPage;
