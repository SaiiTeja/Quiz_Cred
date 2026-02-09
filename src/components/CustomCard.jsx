import React from "react";

const CustomCard = ({ title, image, description, children }) => {
  return (
    <div className="card h-100 startup-card text-center p-3">
      {image && (
        <img
          src={image}
          alt={title || "card image"}
          className="mx-auto mb-3"
          style={{ height: "120px", objectFit: "contain" }}
        />
      )}
      <div className="card-body">
        {title && <h5 className="card-title text-light">{title}</h5>}
        {description && (
          <p className="card-text text-muted-custom">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
