import React from 'react';
import { urlFor } from '../sanity/service';

const MemberDetails = ({ member }) => {
  return (
    <section className="details">
      <div className="details-text">
        <h2>{member.name}</h2>
        <p>{member.biography}</p>
      </div>
      <img 
        src={urlFor(member.image).width(300).url()}
        alt={member.name}
        className="imagebig"
      />
      <div className="interests">
        <h2>Interests</h2>
        <ul>
          {member.interests?.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MemberDetails;
