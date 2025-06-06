import React from "react";

const CostumeCard = ({ image, name, price, size, description, onEdit, onDelete, id }) => {
  return (
    <section>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>${price}</h3>
      <h3>Size: {size}</h3>
      <p>{description}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </section>
  );
};

export default CostumeCard;