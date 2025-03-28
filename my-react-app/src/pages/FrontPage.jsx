import React, { useState, useEffect } from 'react';
import { getAllGroupMembers } from '../sanity/service';
import CardsContainer from '../components/CardsContainer';
import AllUsersLog from '../components/AllUsersLog';

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
    <div className="cards-page">
      <h1>Gruppemedlemmer</h1>
      <CardsContainer groupMembers={groupMembers}/>
      <h1>Arbeidslogg</h1>
      <AllUsersLog groupMembers={groupMembers}/>

    </div>
  );
};

export default FrontPage;
