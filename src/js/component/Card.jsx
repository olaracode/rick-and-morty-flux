import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Card = ({ title, subtitle, id }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/product/${id}`)}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default Card;
