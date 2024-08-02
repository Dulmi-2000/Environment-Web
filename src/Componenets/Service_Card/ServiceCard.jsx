import React from "react";
import './serviceCard.css'

const ServiceCard = ({ title, image }) => {
    return (
      <div className="service-card">
       <img src={image} alt='service' className="service-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;