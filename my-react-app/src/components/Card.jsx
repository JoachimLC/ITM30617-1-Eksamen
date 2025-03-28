import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ id, image, name, email }) => {
  return (
    <div className="card">
      <NavLink to={`/member/${id}`}>
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h2 className="card-name">{name}</h2>
          <p className="card-email">{email}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
