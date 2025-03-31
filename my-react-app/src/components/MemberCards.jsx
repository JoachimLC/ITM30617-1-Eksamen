import React from 'react';
import Card from './card';
import { urlFor } from '../sanity/service';

const MemberCards = ({ groupMembers }) => {
  return (
    <>
    <h1>Gruppemedlemmer</h1>
    <section className="membercards">
  
      {groupMembers.map((member) => (
        <Card 
            key={member._id}
            id={member._id}
            image={urlFor(member.image).width(300).url()}
            name={member.name} 
            email={member.email} 
        />
      ))}
      
    </section>
    </>
  );
};

export default MemberCards;
