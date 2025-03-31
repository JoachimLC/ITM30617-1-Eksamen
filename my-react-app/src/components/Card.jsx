import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ id, image, name, email }) => {
  return (
    <div className="card">
      <NavLink to={`/member/${id}`}>
        <img src={image} alt={name} className="imagesmall" />
        <div className="cardcontent">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
