import React from 'react';
import { urlFor } from '../sanity/service';

const MemberDetails = ({ member }) => {
  return (
    <div className="details">
      <div className="details-text">
        <h2>{member.name}</h2>
        <p>{member.biography}</p>
      </div>
      <div>
        <img 
          src={urlFor(member.image).width(300).url()}
          alt={member.name}
          className="imagebig"
        />
      </div>
      <div className="details-interests">
        <h2>Interests</h2>
        <ul className="interests">
          {member.interests?.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberDetails;
