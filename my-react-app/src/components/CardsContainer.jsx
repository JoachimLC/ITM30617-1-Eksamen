import React from 'react';
import Card from './card';
import { urlFor } from '../sanity/service';

const CardsContainer = ({ groupMembers }) => {
  return (
    <div className="cards-container">
      {groupMembers.map((member) => (
        <Card 
            key={member._id}
            id={member._id}
            image={urlFor(member.image).width(300).url()}
            name={member.name} 
            email={member.email} 
        />
      ))}
      
    </div>
  );
};

export default CardsContainer;
