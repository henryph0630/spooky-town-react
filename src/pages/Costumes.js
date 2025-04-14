import React, { useEffect, useState } from "react";
import CostumeCard from "../components/CostumeCard";
import "../styles.css";

const Costumes = () => {
  const [costumes, setCostumes] = useState([]);

  useEffect(() => {
    fetch("https://spooky-town-api.onrender.com")
      .then((res) => res.json())
      .then((data) => setCostumes(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <main id="content-home">
      <div className="column two">
        <div className="column three gallery" id="costume-gallery">
          {costumes.map((item) => (
            <CostumeCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              size={item.size}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Costumes;